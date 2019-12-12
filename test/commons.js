const expect = require('expect.js');
const { reverseStr, isBetween } = require('../lib/commons');

describe('commons', () => {

  it('should reverse the string', () => {
    const str = 'hola';
    const expected = 'aloh';
    const result = reverseStr(str);
    expect(expected).to.equal(result);
  });

  it('should test a number is within a range', () => {
    const num= 14;
    const range = [0,12];
    const expected = true;
    const result = isBetween(num, range)
    expect(expected).to.equal(result);
  });

});
