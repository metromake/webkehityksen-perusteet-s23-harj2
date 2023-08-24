'use strict';

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const numbers = [1, 8, 3, 5, 4, 6, 7, 2, 9];
console.log(numbers);
console.log(sortArray(numbers));
