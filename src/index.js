import readlineSync from 'readline-sync';
import { welcome, askName } from './commonFuncs';
import { runEvenGame, runCalcGame } from './games';

const brainGamesList = ['0 - EvenGame', '1 - CalcGame'];

const chooseGame = (userName) => {
  let plural = 's';
  if (brainGamesList.length <= 1) plural = '';
  console.log(`Choose your game${plural} from this list`);
  console.log(brainGamesList);
  const userChoice = readlineSync.question('Type number of your game: ');
  switch (userChoice) {
    case '0':
      runEvenGame(userName);
      break;
    case '1':
      runCalcGame(userName);
      break;
    default:
      console.log(`You chose wrong game, try again ${userName}`);
      break;
  }
};

const runBrainGames = () => {
  welcome();
  const userName = askName();
  chooseGame(userName);
  const infiniteCycle = true;
  while (infiniteCycle) {
    console.log('Wanna play again?');
    const playAgain = readlineSync.question('(yes/no): ');
    if (playAgain !== 'yes') break;
    chooseGame(userName);
  }
};

export default runBrainGames;
