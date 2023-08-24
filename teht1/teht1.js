'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log(`Fruits: [${fruits.map(fruit => ` "${fruit}"`)}]`);

console.log('length of fruints: ' + fruits.length);

console.log('element at index 2: ' + fruits[2]);

console.log('last element of fruits' + fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) vegetables.push(prompt('Give a vegetable'));

console.log(`Vegetables: [${vegetables.map(vegetable => ` "${vegetable}"`)}]`);

console.log('length of vegetables: ' + vegetables.length);
