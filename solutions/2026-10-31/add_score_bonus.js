/*
Problem: add_score_bonus
Date: 2026-10-31
Budget: 5 minutes, selected by the learner.
Activity: Predict data changes and repair an unwanted side effect.
Source: AI-prepared candidate implementation and checks; correction pending.

Contract:
- Return a new array of users whose scores have bonus added.
- Preserve the users' other properties and their order.
- Leave the original array and its user objects unchanged.
- An empty input returns an empty array.
- Input records and the numeric bonus are valid.

Before running, predict the original and returned first user's scores.
Then run, explain the discrepancy, and modify only addScoreBonus.
Keep the session within five minutes, including verification and Git work.
*/

function addScoreBonus(users, bonus) {
  return users.map((user) => ({ ...user, score: (user.score += bonus) }));
}

const bonusUsers = [
  { id: 1, name: "Ava", score: 80 },
  { id: 2, name: "Chen", score: 95 },
];

const bonusResult = addScoreBonus(bonusUsers, 10);

console.log(
  "Returned scores, expected [90, 105]:",
  bonusResult.map((user) => user.score),
);
console.log(
  "Original scores, expected [80, 95]:",
  bonusUsers.map((user) => user.score),
);

// These checks were supplied by AI; no extra test-writing task today.
console.assert(
  bonusResult[0].score === 90 && bonusResult[1].score === 105,
  "Returned scores must include the bonus.",
);
console.assert(
  bonusUsers[0].score === 80 && bonusUsers[1].score === 95,
  "Original user scores must stay unchanged.",
);

// Optional learner notes: prediction, cause, and references consulted.
