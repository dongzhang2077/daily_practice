import { getTopActiveUsers } from "./user_service.js";

const rankingUsers = [
  { id: 1, name: "Ava", active: true, score: 80 },
  { id: 2, name: "Ben", active: false, score: 100 },
  { id: 3, name: "Chen", active: true, score: 95 },
  { id: 4, name: "Dana", active: true, score: 90 },
];

// These demonstration calls are provided by AI, not learner-designed tests.
// google -> map function, means, change the pre array user to user.id.
console.log(
  "Old call: expected IDs [3, 4, 1]; actual:",
  getTopActiveUsers(rankingUsers).map((user) => user.id),
);
console.log(
  "New call: expected IDs [3, 4]; actual:",
  getTopActiveUsers(rankingUsers, 2).map((user) => user.id),
);

// Learner tests: write at least three console.assert checks.
// Cover the old behavior, the new behavior, and a boundary you choose.
// my thoughts, so use the 我忘了这个学名，只记得是function的名字一致，然后function实际调用的para的数量不同。
// Select inputs, determine expected results, and run them yourself.
// empty array
console.log(
  "new call: expected IDs []; actual:",
  getTopActiveUsers([], 0).map((user) => user.id),
);
//negative limit
console.log(
  "new call: expected IDs []; actual:",
  getTopActiveUsers([], -1).map((user) => user.id),
);
//
console.log(
  "new call: expected IDs [3,4,1]; actual:",
  getTopActiveUsers(rankingUsers, 3).map((user) => user.id),
);

console.log(
  "Old call: expected IDs [3]; actual:",
  getTopActiveUsers(rankingUsers, 1).map((user) => user.id),
);

// assert
const actualIds = getTopActiveUsers(rankingUsers).map((user) => user.id);
console.assert(
  // I know I should write a boolean but dont know how to present the return array equal to the expected array.
  JSON.stringify(actualIds) === JSON.stringify([3, 4, 1]),
  "Expected [3,4,1], actual: ",
  actualIds,
);

//assertion with limit 2
const actualIdsLimitTwo = getTopActiveUsers(rankingUsers, 2).map(
  (user) => user.id,
);
console.assert(
  // I know I should write a boolean but dont know how to present the return array equal to the expected array.
  JSON.stringify(actualIdsLimitTwo) === JSON.stringify([3, 4]),
  "Expected [3,4], actual: ",
  actualIdsLimitTwo,
);

//assertion with []
const actualIdsEmptyArray = getTopActiveUsers([], 2).map((user) => user.id);
console.assert(
  // I know I should write a boolean but dont know how to present the return array equal to the expected array.
  JSON.stringify(actualIdsEmptyArray) === JSON.stringify([]),
  "Expected [], actual: ",
  actualIdsEmptyArray,
);
// Optional learner notes: initial approach, debugging, and references consulted.
