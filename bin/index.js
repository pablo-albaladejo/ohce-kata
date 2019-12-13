const program = require('commander');

function start() {
    const hours = program.hours || new Date().getHours();
    console.log('hours: ' + hours)
}

program
    .option('-h, --hours <int>', 'time of day')
    .action(start);

program.parse(process.argv);