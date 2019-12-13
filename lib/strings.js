const { daytime } = require('./commons');

const greet = (name, hours) => {
    const moment = daytime(hours);
    return  `Good ${moment}, ${name}!`;
}

const goodbye = (name) => `Goodbye ${name}!`;

const cheer = () => `Nice word!`;

module.exports = {
    greet,
    goodbye,
    cheer
}
