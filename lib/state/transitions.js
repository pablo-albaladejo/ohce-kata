function stateTransition(state, input) {
    return {
        nextState: state,
        output: input
    };
}

module.exports = {
    stateTransition
}