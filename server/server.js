const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // socket.emit('newEmail', {
  //   from: 'Mike@example.com',
  //   text: 'Hey whats up',
  //   createAt: 123
  // });

  socket.emit('newMessageReceived', {
    from: 'anthony@example.com',
    text: 'Hi from Anthony',
    createdAt: 131323
  });

  socket.on('createNewMessage', (newMessage) => {
    console.log('createNewMessage', newMessage);
  });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('disconnect', () => {
    console.log('disconnected from client');
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
})


module.exports = {
  app
};
