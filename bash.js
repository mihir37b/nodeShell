const pwd = require('./pwd');
const ls = require('./ls');



process.stdout.write('prompt > ');

  process.stdin.on('data', (data)=>{
    const cmd = data.
    toString().trim();
  if(cmd === 'pwd'){
    process.stdout.write(pwd());
    console.log("this works");
  }
  else if(cmd === 'ls'){
    ls();
}
  else{
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
  })
