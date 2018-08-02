import readlineSync from 'readline-sync';
import { welcome, askName } from './commonFuncs';

const getRandom = (minNum, maxNum) => {
  const min = minNum || 0;
  const max = maxNum || 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isCorrect = (user, userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`);
    console.log(`Let's try again, ${user}!`);
  }
  return userAnswer === rightAnswer;
};

const runEvenGame = (user, times) => {
  if (!user) welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const runTimes = times || 3;
  const userName = user || askName();
  for (let i = 0; i < runTimes; i += 1) {
    const numQuestion = getRandom();
    console.log(`Question: ${numQuestion}`);
    const rightAnswer = numQuestion % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (!isCorrect(userName, userAnswer, rightAnswer)) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

const runCalcGame = (user, times) => {
  if (!user) welcome();
  console.log('What is the result of the expression?');
  const runTimes = times || 3;
  const userName = user || askName();
  const expressionType = ['add', 'substract', 'multiply'];
  const expressionTypeLength = expressionType.length - 1;
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  for (let i = 0; i < runTimes; i += 1) {
    const a = getRandom();
    const b = getRandom();
    const expressionTypeNumber = getRandom(0, expressionTypeLength);
    let rightAnswer;
    let userAnswer;
    switch (expressionTypeNumber) {
      case 0:
        console.log(`Question: ${a} + ${b}`);
        rightAnswer = add(a, b);
        userAnswer = readlineSync.question('Your answer: ');
        break;
      case 1:
        console.log(`Question: ${a} - ${b}`);
        rightAnswer = substract(a, b);
        userAnswer = readlineSync.question('Your answer: ');
        break;
      case 2:
        console.log(`Question: ${a} * ${b}`);
        rightAnswer = multiply(a, b);
        userAnswer = readlineSync.question('Your answer: ');
        break;
      default:
        break;
    }
    if (!isCorrect(userName, Number(userAnswer), rightAnswer)) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export { runEvenGame, runCalcGame };
