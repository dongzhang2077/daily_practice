/*
Theseus personal timer: connect the first Start action.
Date: 2026-11-07
Budget: 5 minutes, selected by the learner.
Source: AI-prepared element references and event wiring.
        The learner owns the handleStart implementation.

When Start is clicked:
- Store the current device timestamp in startedAtMs, in milliseconds.
- Change the status text to '计时中'.
- Disable the Start button so repeated clicks cannot reset this start time.

This task covers only starting one activity. Elapsed display updates,
stopping, parallel activities, and persistence will be connected later.
Documentation is allowed; note any references or help used.
*/

const startButton = document.querySelector("#start-button");
const statusText = document.querySelector("#timer-status");
let startedAtMs = null;

function handleStart() {
  // TODO: store the current timestamp, update the status, and disable Start.
  // get current time and store it
  let timeNow = Date.now();
  startedAtMs = timeNow;
  statusText.textContent = "计时中";
  startButton.disabled = !startButton.disabled;
}

// The event wiring and diagnostic output are supplied for this exercise.
startButton.addEventListener("click", () => {
  handleStart();
  console.log("Start timestamp (ms):", startedAtMs);
});

// References / help used:
