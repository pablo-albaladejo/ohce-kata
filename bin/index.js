const program = require('commander');

function start() {
    console.log('cli output')
}

program
    .action(start);

program.parse(process.argv);