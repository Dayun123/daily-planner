/* 

Display the options to the user like so:

*** What would you like to see? ***
1. Email
2. Calendar

*/

// laziness...
const l = console.log

displayLoginMenu()

function displayLoginMenu() {
  l('*** What would you like to see? ***')
  l('| 1. Email')
  l('| 2. Calendar')
}


