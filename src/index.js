import readlineSync from 'readline-sync';

function askName() {
  console.log('May I have your name?');
  const actualName = readlineSync.question('Your name: ');

  console.log(`Hello, ${actualName}`);
}

export default askName;
