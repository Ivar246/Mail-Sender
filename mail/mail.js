const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER_NAME,
    pass: process.env.PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET_ID,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

const message = req.body.message;

const mailOptions = {
  from: "ravistha869@mgmail.com",
  to: "shrestha.ravi.1.a@gmail.com",
  subject: "Greetings",
  text: `${message}`,
};

exports.send = (req, res, next) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log("Email send: " + info.response);
  });
  return;
};
