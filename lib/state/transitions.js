const { STATES } = require('../state/states');

function stateTransition(state, input) {
    switch (state.q) {

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

module.exports = {
    stateTransition
}