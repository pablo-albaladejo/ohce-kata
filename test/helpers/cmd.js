/**
 * 
 * Thanks to @betisman and @danielherrerohernando
 * this file is originaly from https://github.com/danielherrerohernando/ohce-kata/blob/master/test/testHelper/testHelper.js
 * 
 */

const { spawn } = require('child_process');
const concat = require('concat-stream');

const execute = processPath => (options, inputs = []) => {
return new Promise((resolve) => resolve(null));
};

module.exports = { execute };