const { daytime } = require('./commons');

const greet = (name, hours) => {
    const moment = daytime(hours);
    return  `Good ${moment}, ${name}!`;
}

const goodbye = (name) => `Goodbye ${name}!`

module.exports = {
    greet,
    goodbye
}
