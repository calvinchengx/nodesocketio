'use strict';

var express = require('express');
var app = express();
var io = require('socket.io');

app.engine('.html', require('ejs').__express);
app.use('/static', express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/socket.html', function(req, res) {
  res.render('socket.html');
});

var server = app.listen(8001, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Nodejs express app listening at http://%s:%s', host, port);
});

io.listen(server);
