const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Your name is required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide your email"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: 8,
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password"],
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: "Password are not same!!",
		},
	},
	phonenumber: {
		type: String,
		validate: [validator.isMobilePhone],
		default: "",
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	role: {
		type: String,
		default: "guest",
	},
	isOrganizer: {
		type: Boolean,
		default: false,
	},
	isSpeaker: {
		type: Boolean,
		default: false,
	},
});

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
