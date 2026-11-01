/*
Problem: predict_async_order
Date: 2026-11-01
Budget: 5 minutes, selected by the learner.
Activity: Read, predict, run, and explain execution order.
Source: AI-prepared snippet; learner prediction pending.

Before running, record the output lines in order, including B's value.
Then run once, compare your prediction, and explain any difference.
Documentation is allowed; keep your first prediction and note references.
No extra implementation or test-writing work is required for this session.
*/

// Prediction before running:
// Actual output after running:
// Reason / references consulted:

function loadScore() {
    return Promise.resolve(80);
}

console.log('A');

loadScore().then((score) => {
    console.log('B', score);
});

console.log('C');
