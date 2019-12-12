const expect = require('expect.js');
const { greet, goodbye } = require('../lib/strings');

describe('it tests strings functions', () => {
  it('should greet user Good morning', () => {
    const user = 'lucas';
    const hours = 18;
    const expected = `Good morning, ${user}!`;
    const result = greet(user, hours);
    expect(result).to.equal(expected);
  });
});
