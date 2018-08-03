const greeting = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = (makeAnswer, getRandom) => {
  const randomNum = getRandom();
  console.log(`Question: ${randomNum}`);
  const rightAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  return makeAnswer(rightAnswer);
};

export { greeting, evenGame };
