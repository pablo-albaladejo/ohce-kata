
const { stateTransition } = require("./transitions");
const { printOutput, prompt } = require("../ui");

function machine(state, input) {
    const { nextState, output } = stateTransition(state, input);
    
    printOutput(output);
    prompt(nextState, (state, output) => { machine(state, output) });
}

module.exports = {
    machine,
}