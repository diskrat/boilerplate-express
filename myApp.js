var express = require('express');
var app = express();

app.get('/',hello)

function hello(req,res) {
    res.send("Hello Express")
}


































 module.exports = app;
