const greeting = 'What is the result of the expression?';

const calcGame = (makeAnswer, getRandom) => {
  const expressionType = ['add', 'substract', 'multiply'];
  const expressionTypeLength = expressionType.length - 1;
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const a = getRandom();
  const b = getRandom();
  const expressionTypeNumber = getRandom(0, expressionTypeLength);
  let rightAnswer;
  switch (expressionTypeNumber) {
    case 0:
      console.log(`Question: ${a} + ${b}`);
      rightAnswer = add(a, b);
      break;
    case 1:
      console.log(`Question: ${a} - ${b}`);
      rightAnswer = substract(a, b);
      break;
    case 2:
      console.log(`Question: ${a} * ${b}`);
      rightAnswer = multiply(a, b);
      break;
    default:
      break;
  }
  return makeAnswer(String(rightAnswer));
};

export { greeting, calcGame };
