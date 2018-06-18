var convTime = require('../modules/time');
var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = "Windows ";
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log(colors.gray.bold('System: '), type);
	console.log(colors.red.bold('Release: '), release);
	console.log(colors.cyan.bold('CPU model: '), cpu);
	console.log(colors.green.bold('Uptime: ~ '), (uptime / 60).toFixed(0), ' min' );
	console.log(colors.green.bold('Uptime: ~ '), (uptime / 3600).toFixed(1), ' h' );
	convTime.print(uptime);
	console.log(colors.yellow.bold('User name: '), userInfo.username);
	console.log(colors.white.bold('Home dir: '), userInfo.homedir);
}
exports.print = getOSinfo;