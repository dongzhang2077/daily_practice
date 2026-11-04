/*
Problem: mark_task_done
Date: 2026-11-03
Budget: 5 minutes, selected by the learner.
Source: AI-prepared faulty candidate and checks; learner repair pending.

Activity:
1. Before running, predict originalTasks[1].done and updatedTasks[1].done.
2. Run once and compare with your prediction.
3. Repair only markTaskDone to meet the contract below.

Contract:
- Return a new array with the matching task's done property set to true.
- Match by id; IDs are unique and all records are valid.
- Leave the original array and its task objects unchanged.
- Preserve all other properties and the task order.
- If no ID matches, preserve the contents; empty input returns [].
- Unchanged task objects may be reused; nested data is outside this task.

No extra tests or new tools are required. Documentation is allowed.
Keep your first prediction and report any references or help used.
Stop at five minutes unless you choose to extend the session.
*/

function markTaskDone(tasks, targetId) {
  // after google // Completely copy the array and all nested objects
  const updatedTasks = structuredClone(tasks);

  //after google
  // Clones the array container AND creates a new object literal for each item
  //const deepCopy = originalArray.map(obj => ({ ...obj }));
  for (const task of updatedTasks) {
    if (task.id === targetId) {
      task.done = true;
    }
  }
  return updatedTasks;
}

// Prediction before running (original / returned done values):
// Cause / references consulted:

const originalTasks = [
  { id: 1, title: "Read a page", done: false },
  { id: 2, title: "Take a walk", done: false },
];
const originalSnapshot = JSON.stringify(originalTasks);
const updatedTasks = markTaskDone(originalTasks, 2);

console.log("Original second task done:", originalTasks[1].done);
console.log("Returned second task done:", updatedTasks[1].done);

// These checks describe the required behavior after the repair.
console.assert(
  JSON.stringify(updatedTasks) ===
    JSON.stringify([
      { id: 1, title: "Read a page", done: false },
      { id: 2, title: "Take a walk", done: true },
    ]),
  "Only the matching task should become done; keep titles, IDs and order.",
);
console.assert(
  JSON.stringify(originalTasks) === originalSnapshot,
  "Original tasks must stay unchanged.",
);
console.assert(updatedTasks !== originalTasks, "Return a new array.");
