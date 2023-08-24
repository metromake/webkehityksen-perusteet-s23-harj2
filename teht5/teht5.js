'use strict';

function sortArray(array, order = 'asc') {
  if (order === 'desc') return array.sort((a, b) => b - a);
  return array.sort((a, b) => a - b);
}

const numbers = [1, 8, 3, 5, 4, 6, 7, 2, 9];
console.log(sortArray(numbers, 'desc'));
console.log(sortArray(numbers, 'asc'));
