//var path = require('path');
var port = process.env.PORT || 3000;
//var express = require('express');
//var app = express();
//var webpack = require('webpack');
//var config = require('./configs/webpack.config.dev');
var server =require('http').createServer(app);
var io = require('socket.io')(server);
//var compiler = webpack(config);
//var mode = process.env.NODE_ENV;

var userList = {};

io.on('connection', function(socket) {
    var socketID = socket.id;

    socket.on('enter', function(info) {
        userList[socketID] = info;
        socket.emit('uid', socketID);
        socket.broadcast.emit('enterUser', userList[socketID].username);
        io.emit("updateUserList", userList);
    });

    socket.on('updateMessages', function(messages) {
        io.emit('updateMessages', messages);
    })

    socket.on('leave', function(uid) {
        if(userList.hasOwnProperty(uid)) {
            //socket.broadcast.emit('leaveUser', userList[uid].username);
            delete userList[uid];
        }

        socket.broadcast.emit("updateUserList", userList);
        socket.disconnect(true);
    });

    socket.on('disconnect', function() {
        if(userList.hasOwnProperty(socketID)) {
            socket.broadcast.emit('leaveUser', userList[socketID].username);
            delete userList[socketID];
        }

        socket.broadcast.emit("updateUserList", userList);
    });
});

server.listen(port, function(err) {
    console.log('Listening port:' + port);
});