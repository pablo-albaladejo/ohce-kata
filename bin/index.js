const program = require('commander');
const { machine } = require("../lib/state/machine");
const { STATES } = require("../lib/state/states");
const { initConsole } = require("../lib/ui");

function start() {


    const hours = program.hours || new Date().getHours();

    const initState = {
        q: STATES.INIT,
        attrs: {
            hours: null,
            name: null
        }
    }

    machine(initState, hours);
}

program
    .option('-h, --hours <int>', 'time of day')
    .action(() => {

        initConsole().then(() => {
            start();
        })

    });

program.parse(process.argv);