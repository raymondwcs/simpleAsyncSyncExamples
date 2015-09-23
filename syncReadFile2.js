var fs = require('fs');

var handle = fs.openSync('README.md','r');
var buf = new Buffer(100000);
var read = fs.readSync(handle, buf, 0, 100, null);
console.log(buf.toString('utf8', 0, read));
fs.closeSync(handle);
