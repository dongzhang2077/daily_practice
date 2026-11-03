/*
Problem: active_user_names
Date: 2026-11-02
Budget: 5 minutes, chosen by the learner.
Source: AI-prepared helpers and checks; learner implementation pending.

Implement getActiveUserNames(users) by reusing both helpers below.
- Return the names of users whose active property is true.
- Keep their original relative order.
- Return [] for empty input or when no users are active.
- Do not modify the input array or its user objects.
- Inputs have valid string names and boolean active properties.
Leave the helpers unchanged; choose how to connect their inputs and outputs.
No new tests, sorting, asynchronous code, or dependencies are required.
Documentation is allowed. Report any references or help used.
*/

function filterActiveUsers(users) {
  return users.filter((user) => user.active === true);
}

function getUserNames(users) {
  return users.map((user) => user.name);
}

function getActiveUserNames(users) {
  // TODO: combine the existing helpers and return the required result.
  return getUserNames(filterActiveUsers(users));
}

const sampleUsers = [
  { name: "Ava", active: true },
  { name: "Ben", active: false },
  { name: "Chen", active: true },
];

// These checks are expected to fail until the TODO is implemented.
const actualNames = getActiveUserNames(sampleUsers);
console.log("Active names:", actualNames);
console.assert(
  JSON.stringify(actualNames) === JSON.stringify(["Ava", "Chen"]),
  "Expected [Ava, Chen], actual:",
  actualNames,
);
console.assert(
  JSON.stringify(getActiveUserNames([])) === JSON.stringify([]),
  "Expected [] for empty input.",
);
console.assert(
  JSON.stringify(getActiveUserNames([{ name: "Ben", active: false }])) ===
    JSON.stringify([]),
  "Expected [] when no users are active.",
);

// References / help used:
// Why I chose this combination:
