var fs = require('fs');

function processFile(err,data) {
	if (err) {
		return console.log(err);
	}
	console.log(data);
}

fs.readFile('README.md','utf8', processFile);
console.log('Done!');
