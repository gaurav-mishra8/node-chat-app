var socket = io();

socket.on('connect', function() {
  console.log('connected to server');
});

  // socket.emit('createEmail',{
  //   to:'Jen@example.com',
  //   text:'Hey this is Gaurav'
  // });

//   socket.emit('createNewMessage', {
//     to: 'Joshua@example.com',
//     text: 'This will be good course'
//   });
// });

socket.on('newMessageReceived', function(newMessage) {
  console.log('New Message Received', newMessage);
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });
