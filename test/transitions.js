const expect = require('expect.js');

const { STATES } = require('../lib/state/states');
const { stateTransition } = require('../lib/state/transitions');
const { greet } = require('../lib/strings');

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

    it('should return a nextState object', () => {
      expect(result.nextState).to.be.an('object');
    });

    it('should return an output', () => {
      expect(result.output).not.to.equal(null);
    });

    it('should return an array output ', () => {
      expect(result.output).to.be.an('array');
    });
  })

  describe('transitions from INIT', () => {

    const hours = (new Date()).getHours();
    const { nextState, output } = stateTransition(S0, hours);

    it('should transitioning from INIT state to NAME state', () => {
      expect(nextState.q).to.equal(STATES.NAME);
    });

    it('should set the hours', () => {
      expect(nextState.attrs.hours).to.equal(hours);
    });

    it('should have no output', () => {
      expect(output.length).to.equal(0);
    });

  });

  describe('transitions from NAME', () => {

    const hours = 0;
    const S1 = {
      q: STATES.NAME,
      attrs: {
        hours,
        name: null
      }
    }

    const name = 'Pablo';
    const { nextState, output } = stateTransition(S1, name);
    const greeting = greet(name, hours);

    it('should transitioning from NAME state to WORD state', () => {
      expect(nextState.q).to.equal(STATES.WORD);
    });

    it('should set the name', () => {
      expect(nextState.attrs.name).to.equal(name);
    });

    it('should have a single output', () => {
      expect(output.length).to.equal(1);
    });

    it('should have a output greeting with name', () => {
      expect(output).to.be.an('array').contain(greeting)
    });

  });

});