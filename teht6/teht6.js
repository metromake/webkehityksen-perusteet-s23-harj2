'use strict';

const movies = [];

function newMovie(title, rating) {
  return {
    title: title,
    rating: parseInt(rating),
  };
}

do {
  const input = prompt(
    "Enter a movie title and a rating seperated by a colon (,) (or 'done' to finish):"
  );
  if (input === null || input === '' || input === 'done') break;
  const args = input.split(',');
  movies.push(newMovie(args[0], args[1]));
} while (true);

movies.sort((a, b) => b.rating - a.rating);
console.log(movies);
document.getElementById('target').innerHTML = movies
  .map(movie => `${movie.title} (${movie.rating})`)
  .join('<br />');
