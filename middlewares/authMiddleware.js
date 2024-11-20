const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const verify = require("./../utils/decodeToken");
const AppError = require("./../utils/appError");

exports.userVerification = catchAsync(async (req, res, next) => {
	const { authorization } = req.headers;
	let token;

	if (authorization && authorization.startsWith("Bearer")) {
		token = authorization.split(" ")[1];
		const decoded = verify(token);
		const user = await User.findById(decoded.id).select("-password");
		if (user) {
			req.user = user;
		} else {
			return next(new AppError("You are not logged in. Please log in to get access.", 401));
		}
	} else {
		return next(new AppError("Bearer token not passed.", 401));
	}
	next();
});
