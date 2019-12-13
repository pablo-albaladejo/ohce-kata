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


});