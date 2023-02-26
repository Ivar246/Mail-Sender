const express = require("express");
const router = express.Router();
const mailSender = require("../mail/mail");

router.get("/", (req, res, next) => {
  console.log("hello");
});
router.post("/", mailSender.sendMail);

module.exports = router;
