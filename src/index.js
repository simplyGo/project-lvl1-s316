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

export { askName, askBooleanQuestion };
