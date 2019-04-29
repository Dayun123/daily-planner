/* 

Get the user's response to the login menu

*/

// laziness...
const l = console.log

// to get user input, we use the node module 'readline'
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PLANNER> '
});

displayLoginMenu()

rl.prompt();

rl.on('line', (line) => {

  

  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function displayLoginMenu() {
  l('*** Please Choose An Option: ***')
  l('| 1. Login')
  l('| 2. Create User Account')
}


