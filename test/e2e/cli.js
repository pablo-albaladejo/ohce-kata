const { expect } = require('chai').use(require('chai-string'));
const cmd = require('../helpers/cmd');
const { greet, cheer } = require('../../lib/strings');
const { reverseStr } = require('../../lib/commons');

let CLI;
describe('it tests cli', () => {

    before(() => {
        CLI = cmd.execute('./bin/index.js');
    });

    it('Should test the cli interface', async () => {
        const promiseFromChildProcess = CLI('');
        const output = await promiseFromChildProcess;
        expect(output).not.to.equal(null);
    });

    describe('it should greet the user', () => {

        it('Should ask the username', async () => {
            const promiseFromChildProcess = CLI('');
            const output = await promiseFromChildProcess;

            expect(output).to.equal(`? What's your name? `);
        });

        it('Should use the night greet at nigth', async () => {
            const name = 'Pablo';
            const hours = 0;

            const promiseFromChildProcess = CLI('-h ' + hours, [name]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[1]).to.equal(greet(name, hours));
        });

        it('Should use the morning greet at morning', async () => {
            const name = 'Pablo';
            const hours = 8;

            const promiseFromChildProcess = CLI('-h ' + hours, [name]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[1]).to.equal(greet(name, hours));
        });


        it('Should use the afternoon greet at afternoon', async () => {
            const name = 'Pablo';
            const hours = 16;

            const promiseFromChildProcess = CLI('-h ' + hours, [name]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[1]).to.equal(greet(name, hours));
        });

    });

    describe('it should ask for a word', () => {

        it('Should ask for a word', async () => {
            const name = 'Pablo';
            const hours = 0;

            const promiseFromChildProcess = CLI('-h ' + hours, [name]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[2]).to.equal('? What\'s your word? ');
        });

        it('Should return the reverse word', async () => {
            const name = 'Pablo';
            const hours = 0;
            const word = 'word';
            const reverse_word = reverseStr(word);

            const promiseFromChildProcess = CLI('-h ' + hours, [name, word]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[3]).to.equal(reverse_word);
        });


        it('Should return the reverse word for multiple inputs', async () => {
            const name = 'Pablo';
            const hours = 0;
            const word = 'word';
            const reverse_word = reverseStr(word);

            const promiseFromChildProcess = CLI('-h ' + hours, [name, word, word, word]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[3]).to.equal(reverse_word);
            expect(output.split('\n')[5]).to.equal(reverse_word);
            expect(output.split('\n')[7]).to.equal(reverse_word);
        });

        it('Should cheer if it is a palindorme word', async () => {
            const name = 'Pablo';
            const hours = 0;
            const word = 'oso';

            const promiseFromChildProcess = CLI('-h ' + hours, [name, word]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[3]).to.equal(reverseStr(word));
            expect(output.split('\n')[4]).to.equal(cheer());
        });


        it('Should goodbye and quit if exit word is introduced', async () => {
            const name = 'Pablo';
            const hours = 0;
            const word = 'Stop!';

            const promiseFromChildProcess = CLI('-h ' + hours, [name, word]);
            const output = await promiseFromChildProcess;

            expect(output.split('\n')[3]).to.equal(`Goodbye ${name}!`);
            expect(output.split('\n')[4]).to.equal('');
            expect(output.split('\n')[5]).to.equal(undefined)
        });

    });

});