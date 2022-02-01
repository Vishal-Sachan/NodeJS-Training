var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send("<h2>Hi There<br>I am Vishal Sachan</br>My First Express Server</h2>");  
})  
var server = app.listen(3000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Listening at ", port)  
})  