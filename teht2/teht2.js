'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) numbers.push(+prompt('Give a number'));

console.log(`Numbers: [${numbers.map(number => ` ${number}`)}]`);

numbers.includes(+prompt("Give a number to check if it's in the array"))
  ? alert('The number is in the array')
  : alert('The number is not in the array');

numbers.pop();

console.log(`Numbers: [${numbers.map(number => ` ${number}`)}]`);

numbers.sort((a, b) => a - b);

console.log(`Numbers: [${numbers.map(number => ` ${number}`)}]`);
