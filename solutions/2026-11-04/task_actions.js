/*
Problem: remove_task
Date: 2026-11-04
Budget: 5 minutes, selected by the learner.
Source: Existing markTaskDone copied from the learner's 2026-11-03 solution.
        AI prepared the new function stub and example; implementation pending.

Implement removeTask(tasks, targetId).
- Return a new array with the matching task removed.
- Keep all other tasks, their properties, and their relative order.
- Leave the input array and its task objects unchanged.
- If no ID matches, return the same contents in a new array.
- Empty input returns an empty array.
- Inputs are valid task records with unique numeric IDs.
- Unchanged task objects may be reused; deep cloning is not required.

Leave markTaskDone unchanged.
Choose one additional input of your own, write the expected result before
running, and add one console.assert. Explain one error it could detect.
Documentation and prior code are allowed; report any references or help.
Stop at five minutes unless you choose to extend the session.
*/

// Existing behavior from the learner's previous solution.
function markTaskDone(tasks, targetId) {
  const updatedTasks = structuredClone(tasks);
  for (const task of updatedTasks) {
    if (task.id === targetId) {
      task.done = true;
    }
  }
  return updatedTasks;
}

function removeTask(tasks, targetId) {
  // TODO: implement the new behavior.
  const removeTasks = structuredClone(tasks);

  return removeTasks.filter((task) => task.id != targetId);
}

const sampleTasks = [
  { id: 1, title: "Read a page", done: false },
  { id: 2, title: "Take a walk", done: true },
  { id: 3, title: "Drink water", done: false },
];

// Expected: tasks 1 and 3, unchanged and in their original order.
console.log("After removing ID 2:", removeTask(sampleTasks, 2));

// My additional input:
// Expected result before running:
// My console.assert:
const mySampleTasks = [
  { id: 4, title: "Read a page", done: false },
  { id: 5, title: "Take a walk", done: true },
  { id: 6, title: "Drink water", done: false },
];
console.assert(
  JSON.stringify(removeTask(mySampleTasks, 4)) ===
    JSON.stringify([
      { id: 5, title: "Take a walk", done: true },
      { id: 6, title: "Drink water", done: false },
    ]),
  "Only the matching task should be removed; keep titles, IDs and order.",
);
// An error this check could detect:
// References / help used: google js function object array remove item
