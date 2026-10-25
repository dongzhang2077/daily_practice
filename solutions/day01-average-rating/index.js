import { movies } from "./movies.js";
import {
  findFirstHighRatedMovie,
  sortMoviesByRating,
  displayMovieSummary,
  createMovieObject,
  logSelectedMovies,
  addWatchedFlag,
  getMoviesAfter,
  getAverageRating,
  findMovie,
  areAllAbove,
  getMoviesByGenre,
  getLongestMovie,
} from "./utils.js";
const printMovieStats = () => {
  const numberOfMovies = movies.length;
  const earliestYear = Math.min(...movies.map((movie) => movie.year));
  const latestYear = Math.max(...movies.map((movie) => movie.year));
  console.log(
    `The dataset contains ${numberOfMovies} movies spanning from ${earliestYear} to ${latestYear}.`,
  );
};

printMovieStats();
findFirstHighRatedMovie(movies);
sortMoviesByRating(movies);

movies.forEach(displayMovieSummary);

const newMovie = createMovieObject("Oppenheimer", 2023, "Biography", 8.5, 180);

// Check if movie with same title already exists
const movieExists = movies.find((movie) => movie.title === newMovie.title);

// Create new array with new movie added if it doesn't exist
const newMovies = movieExists ? movies : [...movies, newMovie];

console.log("Movie exists?", movieExists ? "Yes" : "No");
console.log("Total movies in newMovies array:", newMovies.length);
console.log("New movie added:", newMovie);

const newReleases = [
  createMovieObject("Dune: Part Two", 2024, "Sci-Fi", 8.7, 166),
  createMovieObject("The Batman", 2022, "Action", 7.9, 176),
  createMovieObject(
    "Everything Everywhere All at Once",
    2022,
    "Comedy",
    8.0,
    139,
  ),
];

// Merge newMovies with newReleases using spread operator
const allMovies = [...newMovies, ...newReleases];
console.log("Total movies in allMovies:", allMovies.length);

// ii. Clone the Array
const allMoviesClone = [...allMovies];

// Add a new movie to the clone
allMoviesClone.push(createMovieObject("Barbie", 2023, "Comedy", 7.0, 114));

// Print both arrays to verify original is unchanged
console.log("Original allMovies length:", allMovies.length);
console.log("Clone allMoviesClone length:", allMoviesClone.length);
console.log(
  "Original array unchanged:",
  allMovies.length !== allMoviesClone.length,
);

// iii. Split Top and Remaining Movies with Spread
const getTopAndRemainingMovies = () => {
  // Sort allMovies by rating in descending order
  const sortedMovies = [...allMovies].sort((a, b) => b.rating - a.rating);

  // Use array destructuring with spread to split into top 3 and rest
  const [top1, top2, top3, ...remainingMovies] = sortedMovies;
  const topMovies = [top1, top2, top3];

  // Print both arrays
  console.log("Top 3 Movies:", topMovies);
  console.log("Remaining Movies:", remainingMovies);

  return { topMovies, remainingMovies };
};

const { topMovies, remainingMovies } = getTopAndRemainingMovies();

// Collect Function Arguments Using Rest Parameters
// Call logSelectedMovies with titles of topMovies
logSelectedMovies(...topMovies.map((movie) => movie.title));

// Test addWatchedFlag
console.log(`Movies with watched flag:`, addWatchedFlag(allMovies));

// Test getMoviesAfter
console.log(`Movies after 2010:`, getMoviesAfter(allMovies, 2010));

// Test getAverageRating
console.log(`Average Rating: ${getAverageRating(allMovies).toFixed(2)}`);

// Test findMovie
console.log(`Find 'Inception':`, findMovie(allMovies, "Inception"));

// Test areAllAbove
console.log(`Are all movies rated above 7.0? ${areAllAbove(allMovies, 7.0)}`);

// Test getMoviesByGenre
console.log(`Sci-Fi Movies:`, getMoviesByGenre(allMovies, "Sci-Fi"));

// Test getLongestMovie
console.log(`Longest Movie:`, getLongestMovie(allMovies));

//Test when enter movie's rating is 8, the avg rating should be 8.0
console.assert(
  getAverageRating([createMovieObject("test", 2026, "test", 8, 120)]) === 8.0,
  "Expected average rating to be 8.0, but got " +
    getAverageRating([createMovieObject("test", 2026, "test", 8, 120)]),
);
