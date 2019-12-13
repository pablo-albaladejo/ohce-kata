const { STATES } = require('../state/states');
const { greet, goodbye, cheer } = require('../strings');
const { isPalindrome, reverseStr } = require('../commons');

function stateTransition(state, input) {
    switch (state.q) {

        case STATES.WORD:
            return wordTransition(state, input)

        case STATES.NAME:
            return nameTransition(state, input)

        case STATES.INIT:
            return initTransition(state, input)

        default:
            return {
                nextState: state,
                output: []
            }
    }
}

function initTransition(state, hours) {
    let nextState = { ...state };
    let output = [];

    nextState.q = STATES.NAME;
    nextState.attrs.hours = hours;

    return {
        nextState,
        output,
    }
}

function nameTransition(state, name) {
    let nextState = { ...state };
    let output = [];

    nextState.q = STATES.WORD;
    nextState.attrs.name = name;

    output.push(greet(name, state.attrs.hours));

    return {
        nextState,
        output
    }
}

function wordTransition(state, word) {
    let nextState = { ...state };
    let output = [];

    if (word === 'Stop!') {
        output.push(goodbye(state.attrs.name));
    } else {
        output.push(reverseStr(word));
        if (isPalindrome(word)) output.push(cheer());
    }

    return {
        nextState,
        output
    }
}

module.exports = {
    stateTransition
}