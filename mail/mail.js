
const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e8ca4d78655964",
    pass: "1857366307ab80"
  }
});
// Configure the email options
const mailOptions = {
  from: "ravistha869@gmail.com",
  to: "shrestha.ravi.1.a@gmail.com",
  subject: "Hello from Nodemailer",
  text: "This is the email body",
};

// Send the email
exports.send = async (req, res, next) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log("mail sent successfully")
  }
  catch (err) {
    console.log(err);
  }
};
