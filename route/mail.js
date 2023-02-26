const express = require("express");
const router = express.Router();

router.post("/send", (req, res, next) => {
  const message = req.body.message;
  res.send(`<h1>${message}</h1>`);
  res.end();
});

module.exports = router;
