var express = require('express');
var app = express();


function views(req,res) {
    res.sendFile(__dirname+ '/views/index.html')
}
app.get('/',views)






































 module.exports = app;
