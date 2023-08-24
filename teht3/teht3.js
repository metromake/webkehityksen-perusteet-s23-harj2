'use strict';

const numbers = [];

do {
  const input = prompt("Enter a number (or 'done' to finish):");
  if (input === null || input === '' || input === 'done') break;
  else if (input % 2 === 0) numbers.push(Number(input));
  document.getElementById('target').innerHTML =
    'Even numbers: ' + (numbers.length > 0 ? numbers.join(', ') : 'None');
} while (true);

alert('Stopped');
