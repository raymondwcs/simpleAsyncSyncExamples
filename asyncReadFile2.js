var fs = require('fs');

fs.open('README.md','r',
        function(err,handle) { /* callback for fs.open() */
			if (err) {
				console.log("ERROR: " + err.code + " (" + err.message + ")");
				return;
			}
			var buf = new Buffer(100000);
			fs.read(handle,buf,0,100000,null,
			        function(err, length) {  /* callback for fs.read() */
						if (err) {
							console.log("ERROR: " + err.code + " (" + err.message + ")");
							return;
						}
						console.log(buf.toString('utf8',0,length));
						fs.close(handle,function() {});
					} /* end of callback for fs.read() */
			); /* end of fs.read() */
		} /* end of callback for fs.open() */
); /* end of fs.open() */
