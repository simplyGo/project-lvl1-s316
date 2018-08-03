import { runGame, makeGameInput } from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameQuestion = (getRandom) => {
  const randomNum = getRandom();
  return randomNum;
};

const gameAnswer = (randomNum) => {
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
  return rightAnswer;
};

const getGameData = () => makeGameInput(gameQuestion, gameAnswer);

const evenGame = () => runGame(getGameData, gameDescription);

export default evenGame;
