const expect = require('expect.js');
const { greet, goodbye } = require('../lib/strings');

describe('it tests strings functions', () => {
  it('should greet user Good morning', () => {
    const user = 'lucas';
    const hours = 8;
    const expected = `Good morning, lucas!`;
    const result = greet(user, hours);
    expect(result).to.equal(expected);
  });

  it('should greet user Good morning', () => {
    const user = 'lucas';
    const hours = 15;
    const expected = `Good afternoon, lucas!`;
    const result = greet(user, hours);
    expect(result).to.equal(expected);
  });

  it('should greet user Good morning', () => {
    const user = 'lucas';
    const hours = 22;
    const expected = `Good night, lucas!`;
    const result = greet(user, hours);
    expect(result).to.equal(expected);
  });
});
