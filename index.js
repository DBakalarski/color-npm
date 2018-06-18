var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null){
		var instruction = input.toString().trim();
		switch(instruction) {
		case '/exit': 
			process.stdout.write('Quitting app!\n');
			process.exit();
		case '/lang':
			console.log('Language:', process.env.lang);
			break;
		case '/version': 
			console.log("Node version:", process.versions.node);
			break;
		case '/getOSinfo':
			OSinfo.print();
			break;
		default: 
			process.stderr.write('Wrong instruction!\n');
		}
	}
})
