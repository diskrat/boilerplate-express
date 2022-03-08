var bodyParser = require("body-parser");
var express = require("express");
require("dotenv").config();

var app = express();

function views(req, res) {
  res.sendFile(__dirname + "/views/index.html");
}

function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}
function get_json(req, res) {
  const data = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE == "uppercase")
    data["message"] = data["message"].toUpperCase();
  res.json(data);
}

function time_server(req, res, next) {
  req.time = new Date().toString();
  next();
}

function final_handdler(req, res) {
  const time = { time: req.time };
  res.json(time);
}

function echo_word(req, res) {
  res.json({ echo: req.params.word });
}

function first_last(req, res) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);
app.use("/public", express.static(__dirname + "/public"));


app.route("/name").get(first_last);

app.get("/", views);
app.get("/json", get_json);
app.get("/now", time_server, final_handdler);
app.get("/:word/echo", echo_word);

module.exports = app;
