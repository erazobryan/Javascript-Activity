
// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter movies with rating ≥ 8
const topMovies = movies.filter(movie => movie.rating >= 8);

// 2. Format movie titles
const formattedMovies = topMovies.map(movie => `${movie.title} (${movie.genre}) - ${movie.rating} ⭐`);

// 3. Display on webpage
const list = document.getElementById("movie-list");
formattedMovies.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});

// 4. Recommend function
function recommend(movie, minRating = 8) {
  return movie.rating >= minRating;
}

// Example usage in console
console.log("Is Inception recommended?", recommend(movies[0]));
console.log("Is Frozen recommended?", recommend(movies[1]));h