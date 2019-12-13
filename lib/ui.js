
const inquirer = require("inquirer");
const readline = require('readline');
const figlet = require('figlet');

const questions = require('./constants/questions');
const { STATES } = require('./state/states');

function printOutput(output) {
    for (let i = 0; i < output.length; i++) {
        console.log(output[i])
    }
}

function prompt(state, processUserOutput) {
    switch (state.q) {

        case STATES.WORD:
            promptWord(state, processUserOutput)
            break;


        case STATES.NAME:
            promptName(state, processUserOutput)
            break;
    }
}

function promptName(state, cb) {
    inquirer
        .prompt(questions.name)
        .then((answers) => {
            cb(state, answers['name'])
        });
}

function promptWord(state, cb) {
    inquirer
        .prompt(questions.word)
        .then((answers) => {
            cb(state, answers['word'])
        });
}

function clearTerminal() {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
}

function initConsole() {
    return new Promise(resolve => {
        if (process.env.NODE_ENV !== 'test') {
            figlet('ohce-kata', (err, data) => {
                clearTerminal();
                if (err) console.log(err);

                console.log(data);
                resolve();
            });
        } else resolve();
    });
}
module.exports = {
    printOutput,
    prompt,
    initConsole
}