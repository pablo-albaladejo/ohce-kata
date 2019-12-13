const { expect } = require('chai').use(require('chai-string'));
const cmd = require('../helpers/cmd');

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
})