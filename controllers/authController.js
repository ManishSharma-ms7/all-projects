const User = require("../models/userModel");
const signToken = require("../utils/secretToken");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.register = catchAsync(async (req, res, next) => {
	let { email, password, passwordConfirm, name, phonenumber, role, isOrganizer, isSpeaker } = req.body;
	if (!isOrganizer) {
		isOrganizer = false;
	}
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.json({ message: "User already exists" });
	}
	const user = await User.create({ name, email, password, passwordConfirm, phonenumber, role, isOrganizer, isSpeaker });
	res.status(201).json({ message: "User registered successfully!!!", success: true });
	next();
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new AppError("Please provide email and password!", 400));
	}

	const user = await User.findOne({ email }).select("+password");
	const correct = await user.correctPassword(password, user.password);

	if (!user || !correct) {
		return next(new AppError("Incorrect password or email provided!!!", 400));
	}

	const token = signToken(user._id);
	res.status(201).json({ message: "User logged in successfully", success: true, token });
	next();
});
