function stateTransition(state, input) {
    let output = [];
    
    return {
        nextState: state,
        output
    };
}

module.exports = {
    stateTransition
}