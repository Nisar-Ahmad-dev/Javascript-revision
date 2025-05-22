// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Please enter your age: ', (age) => {
//   console.log(`Your age is ${age}`);
//   rl.close();
// });
// let age = 23
// underageMessage = 'Please try again you are underAge'
// welcomeMessage = 'You are ready to join'

// if (age < 18 ){
//     console.log(underageMessage);
// } else {
//     console.log(welcomeMessage);
// }

let age = 18
underageMessage = 'Please try again you are underAge'
welcomeMessage = 'You are ready to join'

if (age < 18 ){
    console.log(underageMessage);
 } if (age === 18) {
   console.log('Wait for 1 year more')
 } else {
      console.log(welcomeMessage);
  }
