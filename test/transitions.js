const expect = require('expect.js');

const { STATES } = require('../lib/state/states');
const { stateTransition } = require('../lib/state/transitions');
const { greet, goodbye, cheer } = require('../lib/strings');
const { reverseStr } = require('../lib/commons');

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


  describe('transitions from WORD', () => {

    const S2 = {
      q: STATES.WORD,
      attrs: {
        hours: 0,
        name: 'Pablo'
      }
    }

    const non_palindrome_word = 'non_palindrome_word';
    const palindrome_word = 'oso';
    const exit_commnand = 'Stop!';

    describe('transitions from WORD with non palindrome input', () => {

      const reverse_non_palindrome_word = reverseStr(non_palindrome_word);
      const { nextState, output } = stateTransition(S2, non_palindrome_word);

      it('should no transitioning from WORD state', () => {
        expect(nextState.q).to.equal(S2.q);
      });

      it('should have a single output', () => {
        expect(output.length).to.equal(1);
      });

      it('should have a output message with the reverse word', () => {
        expect(output).to.be.an('array').contain(reverse_non_palindrome_word)
      });

    });

    describe('transitions from WORD with palindrome input', () => {

      const reverse_palindrome_word = reverseStr(palindrome_word);
      const cheering = cheer();
      const { nextState, output } = stateTransition(S2, palindrome_word);

      it('should no transitioning from WORD state', () => {
        expect(nextState.q).to.equal(S2.q);
      });

      it('should have a double output', () => {
        expect(output.length).to.equal(2);
      });

      it('should have a first output message with the reverse word', () => {
        expect(output[0]).to.be(reverse_palindrome_word);
      });

      it('should have a second output message with cheering', () => {
        expect(output[1]).to.be(cheering);
      });

    });

    describe('transitions from WORD with exit command', () => {

      const goodbye_msg = goodbye(S2.attrs.name);
      const { nextState, output } = stateTransition(S2, exit_commnand);

      it('should no transitioning from WORD state', () => {
        expect(nextState.q).to.equal(S2.q);
      });

      it('should have a single output', () => {
        expect(output.length).to.equal(1);
      });

      it('should have a output goodbye message with name', () => {
        expect(output).to.be.an('array').contain(goodbye_msg)
      });

    });

  });
});