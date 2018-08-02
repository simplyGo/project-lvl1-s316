import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  console.log('May I have your name?');
  const actualName = readlineSync.question('Your name: ');
  console.log(`Hello, ${actualName}`);
  return actualName;
};

export { welcome, askName };
