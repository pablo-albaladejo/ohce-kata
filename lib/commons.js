const { TIME_RANGES, TIMES } = require('./constants/time');

const reverseStr = (str) => str.split('').reverse().join('');

const isBetween = (num, range) => num >= range[0] && num <= range[1];

const daytime = (hours) => {
    let daytime = "night";
    if (isBetween(hours, TIME_RANGES[TIMES.MORNING])) {
        daytime = "morning";
    } else if (isBetween(hours, TIME_RANGES[TIMES.AFTERNOON])) {
        daytime = "afternoon";
    }
    return daytime;
}

const isPalindrome = (str) => str === reverseStr(str);

module.exports = {
    reverseStr,
    daytime,
    isPalindrome
}
