// Existing helpers for the exercise. Read and reuse; leave their behavior intact.

export function filterActiveUsers(users) {
  return users.filter((user) => user.active === true);
}

export function sortUsersByScore(users) {
  // google->Using the spread syntax to pass array elements as individual arguments
  // google-> in sort, a-b ascending, b-a descending
  return [...users].sort((a, b) => b.score - a.score);
}
