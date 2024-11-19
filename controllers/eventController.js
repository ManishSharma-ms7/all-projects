const Event = require("../models/eventModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const helper = require("./../helper/helper");
const validator = require("validator");

const validateReq = function (req, res, next) {
	if (!req.body?.name) {
		return next(new AppError("Name is required to create a event", 404));
	}
	if (!req.body?.organizer || !Array.isArray(req.body.organizer)) {
		return next(new AppError("organizer is a required.", 404));
	}

	if (!req.body?.description || typeof req.body.description !== "string") {
		return next(new AppError("description is a required.", 404));
	}
	return true;
};

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
	if (!published || !["true", "false"].includes(published.toLowerCase())) {
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
	const { id } = req.body;
	if (!id) {
		return next(new AppError("please provide event id.", 404));
	}
	if (req.user.isOrganizer === false) {
		return next(new AppError("only organizer can update details of event.", 400));
	}

	let update = {};
	let filter = { _id: id };

	for (let key in req.body) {
		if (req.body?.key) {
			update[key] = req.body.key;
		}
	}

	let event = await Event.findOneAndUpdate(filter, update);
	res.status(201).json({ success: true, message: "event details updated.", event });
	next();
});

exports.deleteEvents = catchAsync(async (req, res, next) => {
	const { id } = req.body;
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

exports.register = catchAsync(async (req, res, next) => {});
