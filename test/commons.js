const expect = require('expect.js');
const { reverseStr, isBetween, daytime, isPalindrome } = require('../lib/commons');

describe('it tests commons functions', () => {

  it('should reverse the string', () => {
    const str = 'hola';
    const expected = 'aloh';
    const result = reverseStr(str);
    expect(result).to.equal(expected);
  });

  it('should test a number is within a range', () => {
    const num= 8;
    const range = [0,12];
    const expected = true;
    const result = isBetween(num, range);
    expect(result).to.equal(expected);
  });

  it('should not include max value range', () => {
    const num= 12;
    const range = [0,12];
    const expected = true;
    const result = isBetween(num, range);
    expect(result).to.equal(expected);
  });

  it('should return the daytime according the hour', () => {
    const hours = 8;
    const expected = 'morning';
    const result = daytime(hours);
    expect(result).to.equal(expected);
  });

  it('should test a palindrome word', () => {
    const word = 'oso';
    const expected = true;
    const result = isPalindrome(word);
    expect(result).to.equal(expected);
  });

});
