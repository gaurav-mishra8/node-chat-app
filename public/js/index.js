var socket = io();

socket.on('connect', function() {
  console.log('connected to server');
});

socket.on('newMessage', function(message) {
  console.log('New Message Received', message);

  var li = jQuery('<li></li>');
  li.text(`${message.from}:${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newLocationMessage', function(message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My current location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);

});


jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(data) {

  });

});

var locationButton = jQuery('#send-location');

locationButton.on('click', function() {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  navigator.geolocation.getCurrentPosition(function(position) {

    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

  }, function() {
    alert('unable to fetch location');
  });

});
