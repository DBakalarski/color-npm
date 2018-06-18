var colors = require('colors');
function convertTime(time) {

var hours = Math.floor(time / 3600);
var minutes = Math.floor(((time / 3600) - hours) * 60);
var seconds = (((((time / 3600) - hours) * 60) - minutes) *60).toFixed(0);

console.log(colors.magenta.bold('Exact uptime:'), hours, 'h ',  minutes, 'min ', seconds, 'sec ');
}
exports.print = convertTime;