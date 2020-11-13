const fs = require('fs');

const lsFunc =function(){
  console.log("first part");
  fs.readdir('./', 'utf8', (err, files) => {	
    console.log("in func");
if (err) {				
   throw err;		
} else {		
process.stdout.write(files.join('\n'));
process.stdout.write('\nprompt > ');	
  }	
	});
}

module.exports = lsFunc;
