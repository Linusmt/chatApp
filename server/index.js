var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var dirName = "/Users/student/Codes/chatApp";


app.get('/', function(req, res){
  res.sendFile(dirName + "/index.html");
});

io.on('connection',function(socket){
  socket.on('chat message',function(msg){
    io.emit('chat message', msg);
    console.log("message: " + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});