import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const askName = () => {
  console.log('May I have your name?');
  const actualName = readlineSync.question('Your name: ');
  console.log(`Hello, ${actualName}`);
  return actualName;
};

const getRandom = (minNum, maxNum) => {
  const min = minNum || 0;
  const max = maxNum || 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runEvenGame = (userName, times) => {
  for (let i = 0; i < times; i += 1) {
    const numQuestion = getRandom();
    console.log(`Question: ${numQuestion}`);
    const rightAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { askName, runEvenGame };
