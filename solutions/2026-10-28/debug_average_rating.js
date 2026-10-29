/*
Problem: debug_average_rating
Date: 2026-10-28
Activity: Read, predict, diagnose, and make a small correction.
Source: AI-prepared debugging exercise; learner correction pending.

Contract:
- Return the average rating of movies with rating >= minRating.
- Return 0 when no movies qualify, including an empty input array.
- Ratings and minRating are valid finite numbers.
- Do not modify the input array.

This candidate implementation contains one intentional logic error.
Before running, predict the first call's actual result.
Make a small correction, then verify all three cases below.
Keep the learner session within five minutes, including Git work.
*/

function averageRatingAtLeast(movies, minRating) {
  const selectedMovies = movies.filter((movie) => movie.rating >= minRating);

  if (selectedMovies.length === 0) {
    return 0;
  }

  const total = selectedMovies.reduce((sum, movie) => sum + movie.rating, 0);
  return total / selectedMovies.length;
}

const debugMovies = [{ rating: 6 }, { rating: 8 }, { rating: 10 }];

// Required results after the correction: 9, 0, 0.
console.log(
  "Case 1: expected 9; actual:",
  averageRatingAtLeast(debugMovies, 8),
);
console.log(
  "Case 2: expected 0; actual:",
  averageRatingAtLeast(debugMovies, 11),
);
console.log("Case 3: expected 0; actual:", averageRatingAtLeast([], 8));

// Learner notes (optional): prediction, cause, and references consulted.
