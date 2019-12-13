
const { stateTransition } = require("./transitions");

function machine(state, input) {
    const { nextState, outputs } = stateTransition(state, input);
}

module.exports = {
    machine,
}