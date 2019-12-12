const expect = require('expect.js');
const { reverseStr, isBetween, daytime } = require('../lib/commons');

describe('commons', () => {

  it('should reverse the string', () => {
    const str = 'hola';
    const expected = 'aloh';
    const result = reverseStr(str);
    expect(expected).to.equal(result);
  });

  it('should test a number is within a range', () => {
    const num= 8;
    const range = [0,12];
    const expected = true;
    const result = isBetween(num, range);
    expect(expected).to.equal(result);
  });

  it('should return the daytime according the hour', () => {
    const hours = 8;
    const expected = 'morning';
    const result = daytime(hours);
    expect(expected).to.equal(result);
  });

});
