const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const maxNum = a > b ? a : b;
  let gcd = 1;
  for (let i = 1; i <= maxNum; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
};

const gcdGame = (makeAnswer, getRandom) => {
  const multiply = getRandom(1, 10);
  const a = getRandom(1, 10) * multiply;
  const b = getRandom(1, 10) * multiply;
  const rightAnswer = getGCD(a, b);
  console.log(`Question: ${a} ${b}`);
  return makeAnswer(String(rightAnswer));
};

export { gameDescription, gcdGame };
