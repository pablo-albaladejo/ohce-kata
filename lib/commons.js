const reverseStr = (str) => str.split('').reverse().join('');

const isBetween = (num, range) => {
    //TODO a function that decide if certain hour is withn certain time range
    return null;
}


const isPalindrome = (str) => str === reverseStr(str);

module.exports = {
    reverseStr,
    isBetween,
    isPalindrome
}
