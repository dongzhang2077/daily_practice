/*
Problem: total_duration_by_genre
Date: 2026-10-29
Activity: Adapt a previously practiced pattern to a changed requirement.
Source: AI-prepared task and input data; learner implementation pending.

Contract:
- Return an object containing the total duration for each genre present.
- Return an empty object for an empty input array.
- Do not modify the input array or movie objects.
- Each movie has a normal genre name (such as Action, Drama, or Comedy)
  and a nonnegative finite numeric duration, measured in minutes.

Try your own approach first. Documentation and existing code are allowed;
report what you consulted. Keep the session within five minutes.
*/

function totalDurationByGenre(movies) {
  // TODO: implement the required behavior.
  const countMovie = {};
  for (const movie of movies) {
    if (countMovie[movie.genre]) {
      countMovie[movie.genre] = countMovie[movie.genre] + movie.duration;
    } else {
      countMovie[movie.genre] = movie.duration;
    }
  }
  return countMovie;
}

const durationSamples = [
  { genre: "Action", duration: 120 },
  { genre: "Drama", duration: 90 },
  { genre: "Action", duration: 100 },
];

console.log(
  "Case 1: expected { Action: 220, Drama: 90 }; actual:",
  totalDurationByGenre(durationSamples),
);
console.log("Case 2: expected {}; actual:", totalDurationByGenre([]));

// Learner notes (optional): initial approach and references consulted.
