var express = require('express');
require('dotenv').config()
var app = express();


function views(req,res) {
    res.sendFile(__dirname+ '/views/index.html')
}
function get_json(req,res) {
    const data = {"message": "Hello json"}
    console.log(data)
    if(process.env.MESSAGE_STYLE =='uppercase') data["message"] = data['message'].toUpperCase()
    res.json(data)
}

app.use('/public',express.static(__dirname + '/public'))
app.get('/',views)
app.get('/json',get_json);




































 module.exports = app;
