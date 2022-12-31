const IP = require('ip');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/mail.html');
  let timenowunix = Date.now() // unix time
  let timenow = new Date(timenowunix).toLocaleTimeString("ru") // unix time to real time
  const ipAddress = IP.address(); // user's ip address
  console.log('ip: ', ipAddress) //return to console: ip address
  console.log('time: ',  timenow) //return to console: real time
});







io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg)=>{
      io.emit('chat message', msg);
        console.log(msg);
  })
});






server.listen(3000, () => {
  console.log('listening on *:3000');
});