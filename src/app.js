'use strict';

var io = require('socket.io-client');
var socket = io();
var $ = require('jquery');

socket.on('message', function(data) {
  console.log(data.message);
  $('#message').text(data.message);
});

socket.on('reload', function() {
  window.location.reload();
});
