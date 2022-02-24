var express = require('express');
var app = express();


style = express.static(__dirname + '/public')

function views(req,res) {
    res.sendFile(__dirname+ '/views/index.html')
}
app.use('/',style)
app.get('/',views)






































 module.exports = app;
