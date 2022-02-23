var express = require('express');
var app = express();


function views(req,res) {
    res.sendFile(__dirname+ '/views/index.html')
}
app.use(express.static(__dirname + '/public'))
app.get('/',views)






































 module.exports = app;
