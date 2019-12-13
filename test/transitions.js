const expect = require('expect.js');

const { STATES } = require('../lib/state/states');
const {stateTransition } = require('../lib/state/transitions');

describe('it tests state transitions', () => {

  const S0 = {
    q: STATES.INIT,
    attrs: {
      hours: null,
      name: null
    }
  }

  describe('stateTransition should return a nextState and an output', () => {
    const hours = (new Date()).getHours();
    const result = stateTransition(S0, hours);

    it('should return a result', () => {
      expect(result).not.to.equal(null);
    });

    it('should return a nextState', () => {
      expect(result.nextState).not.to.equal(null);
    });

    it('should return a output', () => {
      expect(result.output).not.to.equal(null);
    });

  })


});