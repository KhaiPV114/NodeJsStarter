var http = require('http');
var ex = require('express');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World"); // now it should work
  res.end();
}).listen(8081);