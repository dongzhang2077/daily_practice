export const findFirstHighRatedMovie = (movies) => {
  // Use find() to get first movie with rating > 8.8
  const movie = movies.find((e) => e.rating > 8.8);

  const { title, year, rating } = movie;
  // Print the result using template literal
  console.log(`${title}(${year}) has an IMDb rating of ${rating}`);
};

export const sortMoviesByRating = (movies) => {
  const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

  // Use array destructuring
  const [topMovie1, topMovie2, ...otherTopMovies] = sortedMovies;

  // Display all three in console
  console.log("Top Movie 1:", topMovie1);
  console.log("Top Movie 2:", topMovie2);
  console.log("Other Top Movies:", otherTopMovies);
};

export const displayMovieSummary = ({ title, year, genre }) => {
  // Print the summary
  console.log(`${title} (${year}) – Genre: ${genre}`);
};

export const createMovieObject = (title, year, genre, rating, duration) => {
  return {
    title,
    year,
    genre,
    rating,
    duration,
  };
};

export const logSelectedMovies = (...movieTitles) => {
  console.log(`You selected: ${movieTitles.join(", ")}`);
};

export const addWatchedFlag = (movies) => {
  return movies.map((movie) => ({
    ...movie,
    watched: false,
  }));
};

// getMoviesAfter(year): Filter movies released after given year
export const getMoviesAfter = (movies, year) => {
  return movies.filter((movie) => movie.year > year);
};

// getAverageRating(): Calculate average rating using reduce
export const getAverageRating = (movies) => {
  const total = movies.reduce((sum, movie) => sum + movie.rating, 0);
  return total / movies.length;
};

// findMovie(title): Find first movie with matching title
export const findMovie = (movies, title) => {
  return movies.find((movie) => movie.title === title);
};

// areAllAbove(rating): Check if all movies are above rating threshold
export const areAllAbove = (movies, rating) => {
  return movies.every((movie) => movie.rating > rating);
};

// getMoviesByGenre(genre): Filter movies by genre
export const getMoviesByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

// getLongestMovie(): Find movie with maximum duration
export const getLongestMovie = (movies) => {
  return movies.reduce((longest, movie) =>
    movie.duration > longest.duration ? movie : longest
  );
};
