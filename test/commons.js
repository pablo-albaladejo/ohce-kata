const expect = require('expect.js');
const { reverseStr } = require('../lib/commons');

describe('commons', () => {
  it('should reverse the string', () => {
    const str = 'holaaa';
    const expected = 'aloh';
    const result = reverseStr(str);
    expect(expected).to.equal(result);
  });
});
