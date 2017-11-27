var expect = require('expect');
var {
  generateMessage
} = require('./message');

describe('generateMessage', () => {

  it('should generate correct message', () => {

    var message = generateMessage("andrew@example.com", "Sample text");

    expect(message.from).toBe("andrew@example.com");
    expect(message.text).toBe("Sample text");
    expect(typeof message.createdAt).toBe('number');

  });

});
