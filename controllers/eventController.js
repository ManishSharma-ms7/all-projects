const Event = require("../models/eventModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const helper = require("./../helper/helper");
const { sendMail } = require("./../utils/mailer");

exports.getEvents = catchAsync(async (req, res, next) => {
	const event = await Event.find();
	res.status(200).json({ success: true, message: "", event });
});

exports.saveEvents = catchAsync(async (req, res, next) => {
	if (helper.isEmptyObject(req)) {
		return next(new AppError("no data is provided.", 400));
	}

	if (req.user.isOrganizer === false) {
		return next(new AppError("only organizer can add event.", 400));
	}

	const { name, event_start_date, event_end_date, description, capacity, speaker, audience, published } = req.body;

	if (!Array.isArray(speaker)) {
		return next(new AppError("speaker param is not in proper format.", 400));
	}
	if (!name) {
		return next(new AppError("name cannot be empty", 400));
	}
	if (!description) {
		return next(new AppError("description cannot be empty", 400));
	}
	if (!event_start_date) {
		event_start_date = new Date();
	}
	if (!event_end_date) {
		event_end_date = new Date();
	}
	if (!capacity) {
		return next(new AppError("incorrect capacity value.", 400));
	}
	if (typeof published !== "boolean") {
		return next(new AppError("incorrect published value.", 400));
	}

	let organizer = [req.user.email];

	const event = await Event.create({
		name,
		organizer,
		event_start_date,
		event_end_date,
		description,
		capacity,
		speaker,
		audience,
		published,
	});
	res.status(200).json({ success: true, message: "Event is registered successfully!!!", event });
});

exports.updateEvents = catchAsync(async (req, res, next) => {
	const { name, event_start_date, event_end_date, description, capacity, speaker, audience, published } = req.body;
	let id = req.params.id;
	if (!id) {
		return next(new AppError("please provide event id.", 404));
	}
	if (
		req.user.isSpeaker &&
		!req.user.isOrganizer &&
		(name || event_start_date || event_end_date || description || capacity || audience || published)
	) {
		return next(new AppError("Organizer can only update event details like name, capacity", 400));
	}
	if (!req.user.isSpeaker && !req.user.isOrganizer) {
		return next(new AppError("The user is not authorized to perform this action.", 400));
	}

	let update = {};
	let filter = { _id: id };

	for (let key in req.body) {
		if (req.body[key]) {
			update[key] = req.body[key];
		}
	}

	let event = await Event.findOneAndUpdate(filter, update, { new: true });
	res.status(201).json({ success: true, message: "event details updated.", event });
	next();
});

exports.deleteEvents = catchAsync(async (req, res, next) => {
	let id = req.params.id;
	if (!id) {
		return next(new AppError("please provide event id.", 404));
	}
	if (req.user.isOrganizer === false) {
		return next(new AppError("only organizer can delete event.", 400));
	}

	let filter = { _id: id };
	let event = await Event.deleteOne(filter);
	res.status(204).json({ success: true, message: "event deleted." });
});

exports.register = catchAsync(async (req, res, next) => {
	const { email } = req.body;
	let id = req.params.id;
	if (!id) {
		return next(new AppError("please provide event id.", 404));
	}
	if (typeof email !== "string") {
		return next(new AppError("Incorrect value.", 404));
	}

	let event = await Event.findById(id);
	if (event.capacity < event.audience.length + 1) {
		return next(new AppError("Capacity for the event is full. No more registration will be taken forward.", 404));
	}

	if (event.audience.includes(email)) {
		return next(new AppError("User already registered.", 404));
	}
	event.audience.push(email);
	event.save();

	text = `Hi User, you have successfully registered for the event ${event.name}-${event.description}. The event will held on ${event.event_start_date} till ${event.event_end_date}. You will get reminder mail for joining.`;

	sendMail(event.name, text, "", email);
	res.status(201).json({ success: true, message: "User is registered in the event. You will receive email with event details." });
	next();
});
