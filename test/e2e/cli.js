const { expect } = require('chai').use(require('chai-string'));
const cmd = require('../helpers/cmd');
const {greet } = require('../../lib/strings');

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

    it('Should greet the user', async () => {
        const name = 'Pablo';
        const hours = 0;

        const promiseFromChildProcess = CLI('-h ' + hours);
        const childProcess = promiseFromChildProcess.relatedProcess;

        childProcess.send({ name });

        const output = await promiseFromChildProcess;
        expect(output).to.startsWith(greet(name, hours));

    });
})