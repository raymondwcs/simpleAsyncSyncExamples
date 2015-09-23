var fs = require('fs');

fs.readFile('README.md','utf8', 
			function (err,data) { /* callback for fs.readFile() */
				if (err) {
					return console.log(err);
				}
				console.log(data);
			} /* end of callback for fs.readFile() */
) /* end of fs.readFile() */
console.log('Done!');
