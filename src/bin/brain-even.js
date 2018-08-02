#!/usr/bin/env node
import { askName, askBooleanQuestion as askQstn } from '..';

function isUsrRight(rightAns, usrAns) {
  if (rightAns === usrAns) {
    console.log('Correct!');
    return true;
  };
  console.log(`${usrAns} is wrong answer ;(. Correct answer was ${rightAns}`);
  console.log(`Let's try again, ${usrName}!`);
  return false;
}

function isEven(num) {
  if (num % 2 == 0) return true;
  return false;
}

function getRandom(minNum, maxNum) {
  const min = minNum | 0;
  const max = maxNum | 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

function runGame(times) {
  for (let i = 0; i < times; i++) {
    const num = getRandom();
    const rightAns = isEven(num) ? 'yes' : 'no';
    const usrAns = askQstn(num);
    if (!isUsrRight(rightAns, usrAns)) return;
  };
  console.log(`Congratulations, ${usrName}!`);
};

const usrName = askName();
console.log('\n');
const times = 3;
runGame(times);
