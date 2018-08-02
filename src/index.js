import readlineSync from 'readline-sync';

function askName() {
  console.log('May I have your name?');
  const actualName = readlineSync.question('Your name: ');

  console.log(`Hello, ${actualName}`);
  return actualName;
}

function askBooleanQuestion(question) {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
}

function isUsrRight(rightAns, usrAns) {
  if (rightAns === usrAns) return true;
  return false;
}

function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}

function getRandom(minNum, maxNum) {
  const min = minNum || 0;
  const max = maxNum || 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Welcome to the Brain Games!');

function runEvenGame(usrName) {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const rightAns = isEven(num) ? 'yes' : 'no';
    const usrAns = askBooleanQuestion(num);
    if (isUsrRight(rightAns, usrAns)) {
      console.log('Correct!');
    } else {
      console.log(`"${usrAns}" is wrong answer ;(. Correct answer was "${rightAns}"`);
      console.log(`Let's try again, ${usrName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${usrName}!`);
}

export { askName, runEvenGame };
