import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  console.log('May I have your name?');
  const actualName = readlineSync.question('Your name: ');
  console.log(`Hello, ${actualName}`);
  return actualName;
};

const makeAnswer = (rightAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ');
  return cons(rightAnswer, userAnswer);
};
const getRightAnswer = answer => car(answer);
const getUserAnswer = answer => cdr(answer);

const runTimes = 3;

const getRandom = (minNum = 0, maxNum = 100) => {
  const min = minNum;
  const max = maxNum;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isAnswerCorrect = (userName, answer) => {
  const isCorrect = getUserAnswer(answer) === getRightAnswer(answer);
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${getUserAnswer(answer)}" is wrong answer ;(. Correct answer was "${getRightAnswer(answer)}"`);
    console.log(`Let's try again, ${userName}!`);
  }
  return isCorrect;
};

const runGame = (greeting, gameFunc) => {
  welcome();
  console.log(greeting);
  const userName = askName();
  for (let i = 0; i < runTimes; i += 1) {
    const answer = gameFunc(makeAnswer, getRandom);
    // ----- test function -----
    console.log('----');
    console.log(getRightAnswer(answer));
    console.log(getUserAnswer(answer));
    console.log('----');
    if (!isAnswerCorrect(userName, answer)) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

// ----- Run games using 'braing-games' -----
//
// const brainGamesList = ['0 - EvenGame', '1 - CalcGame', '2 - gcdGame'];
//
// const chooseGame = (userName) => {
//   let plural = 's';
//   if (brainGamesList.length <= 1) plural = '';
//   console.log(`Choose your game${plural} from this list`);
//   console.log(brainGamesList);
//   const userChoice = readlineSync.question('Type number of your game: ');
//   switch (userChoice) {
//     case '0':
//       runEvenGame(userName);
//       break;
//     case '1':
//       runCalcGame(userName);
//       break;
//     case '2':
//       runGcdGame(userName);
//       break;
//     default:
//       console.log(`You chose wrong game, try again ${userName}`);
//       break;
//   }
// };

const runBrainGames = () => {
  welcome();
  askName();
  // const userName = askName();
  // chooseGame(userName);
  // const infiniteCycle = true;
  // while (infiniteCycle) {
  //   console.log('Wanna play again?');
  //   const playAgain = readlineSync.question('(yes/no): ');
  //   if (playAgain !== 'yes') break;
  //   chooseGame(userName);
  // }
};

export { runBrainGames, runGame };
