const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mailRoute = require("./route/mail");

app.use(bodyParser.json());
app.use(mailRoute);

app.listen(4000);
