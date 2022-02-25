var express = require("express");
require("dotenv").config();
var app = express();

function views(req, res) {
  res.sendFile(__dirname + "/views/index.html");
}

function logger(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}
function get_json(req, res) {
  const data = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE == "uppercase")
    data["message"] = data["message"].toUpperCase();
  res.json(data);
}

function time_server(req,res,next) {
    req.time = new Date().toString()
    next();
}

function final_handdler(req,res) {
    const time = {'time': req.time }
    res.json(time)
}
app.use(logger)
app.use("/public", express.static(__dirname + "/public"));


app.get("/", views);
app.get("/json", get_json);
app.get("/now",time_server,final_handdler);


module.exports = app;
