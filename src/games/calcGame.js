import { runGame, makeGameInput } from '..';

const gameDescription = 'What is the result of the expression?';

const expressionType = ['add', 'substract', 'multiply'];
const expressionTypeLength = expressionType.length - 1;

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const getExpression = (typeNumber, a, b) => {
  let expResult = '';
  switch (typeNumber) {
    case 0:
      expResult = `${a} + ${b}`;
      break;
    case 1:
      expResult = `${a} - ${b}`;
      break;
    case 2:
      expResult = `${a} * ${b}`;
      break;
    default:
      break;
  }
  return expResult;
};

const getExpressionResult = (expression) => {
  const expList = expression.split(' ');
  const a = Number(expList[0]);
  const b = Number(expList[2]);
  const exp = expList[1];
  let result;
  switch (exp) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = substract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    default:
      break;
  }
  return result;
};

const gameQuestion = (getRandom) => {
  const a = getRandom();
  const b = getRandom();
  const expType = getRandom(0, expressionTypeLength);
  return getExpression(expType, a, b);
};

const gameAnswer = questionData => getExpressionResult(questionData);

const getGameData = () => makeGameInput(gameQuestion, gameAnswer);

const calcGame = () => runGame(getGameData, gameDescription);

export default calcGame;
