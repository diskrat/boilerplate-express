var express = require('express');
var app = express();


function views(req,res) {
    res.sendFile(__dirname+ '/views/index.html')
}
function get_json(req,res) {
    res.json({"message": "Hello json"})
}

app.use('/public',express.static(__dirname + '/public'))
app.get('/',views)
app.get('/json',get_json);




































 module.exports = app;
