const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
exports.sendMail = async function (subject, text, html, to) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.email",
		port: 587,
		secure: false, // true for port 465, false for other ports
		auth: {
			user: "manish.sharma120298@gmail.com",
			pass: "vqckqdraqfcfrgns",
		},
	});
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: {
			name: "Online Event Host",
			address: "manish.sharma120298@gmail.com",
		},
		to, // list of receivers
		subject, // Subject line
		text, // plain text body
		html, // html body
	});

	// console.log("Message sent: %s", info.messageId);
	return info;
};

// response = sendMail("Online Event", "Hello I am Manish Sharma", "<html>Text in Here</html>", ["ms7.sharma1298@gmail.com"]);
// console.log(response.then((resp)=>{console.log(resp)}));
