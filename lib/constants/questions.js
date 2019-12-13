module.exports = {
    name: [
        {
            type: 'intput',
            message: 'What\'s your name?',
            name: 'name',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'you must enter your name';
            }
        }
    ],
    word: [
        {
            type: 'intput',
            message: 'What\'s your word?',
            name: 'word',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'you must enter a word';
            }
        }
    ]
}