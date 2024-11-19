const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Your event name is required"],
	},
	organizer: {
		type: [String],
		required: [true, "Please provide organizer details"],
	},
	event_start_date: {
		type: Date,
		default: new Date(),
	},
	event_end_date: {
		type: Date,
		default: new Date(),
	},
	description: {
		type: String,
		required: [true, "Please provide description."],
	},
	capacity: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	speaker: {
		type: [String],
		default: [],
	},
	audience: {
		type: [String],
		default: [],
	},
	published: {
		type: Boolean,
		default: true,
	},
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
