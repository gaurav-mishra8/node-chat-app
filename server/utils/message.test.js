var expect = require('expect');
var {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', () => {

  it('should generate correct message', () => {

    var message = generateMessage("andrew@example.com", "Sample text");

    expect(message.from).toBe("andrew@example.com");
    expect(message.text).toBe("Sample text");
    expect(typeof message.createdAt).toBe('number');

  });

});

describe('generate location message', () => {

  it('should generate correct location message', () => {

    var locationMessage = generateLocationMessage('Ashwell', 1, 2);

    expect(locationMessage.from).toBe('Ashwell');
    expect(locationMessage.url).toBe('https://www.google.com/maps?q=1,2');
    expect(typeof locationMessage.createdAt).toBe('number');

  });



});
