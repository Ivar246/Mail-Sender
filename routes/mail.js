const express = require("express");
const router = express.Router();
const mailSender = require("../mail/mail");

router.post("/send-mail", mailSender.send);
router.get("/get-token", (req, res, next) => {
    return res.status(200).json({ message: "hello" })
})

module.exports = router;
