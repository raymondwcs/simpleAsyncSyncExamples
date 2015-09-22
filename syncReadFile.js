var fs = require('fs');

var data = fs.readFileSync('README.md','utf8');
console.log(data);
console.log("Done!");
