const { STATES } = require('../state/states');
const { greet } = require('../strings');

function stateTransition(state, input) {
    switch (state.q) {

        case STATES.NAME:
            return nameTransition(state, input)

        default:
        case STATES.INIT:
            return initTransition(state, input)

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


module.exports = {
    stateTransition
}