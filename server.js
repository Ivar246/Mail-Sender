const express = require("express");
const bodyParser = require("body-parser");
const mailRoute = require("./routes/mail");
const { google } = require("googleapis")
const app = express();

app.use(bodyParser.json());
app.use(mailRoute);



app.listen(3000, () => {
  console.log("server listening on port 3000");
});
