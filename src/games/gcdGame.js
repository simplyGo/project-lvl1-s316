import { runGame, makeGameInput } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const maxNum = a > b ? a : b;
  let gcd = 1;
  for (let i = 1; i <= maxNum; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
};

const getQuestionValues = question => question.split(' ');

const gameQuestion = (getRandom) => {
  const multiply = getRandom(1, 10);
  const a = getRandom(1, 10) * multiply;
  const b = getRandom(1, 10) * multiply;
  return `${a} ${b}`;
};

const gameAnswer = (question) => {
  const questionData = getQuestionValues(question);
  const a = Number(questionData[0]);
  const b = Number(questionData[1]);
  return getGCD(a, b);
};

const getGameData = () => makeGameInput(gameQuestion, gameAnswer);

const gcdGame = () => runGame(getGameData, gameDescription);

export default gcdGame;
