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
import { getElapsedSeconds } from "../src/elapsed_time.js";
const startButton = document.querySelector("#start-button");
const statusText = document.querySelector("#timer-status");
const secondsCounter = document.querySelector("#elapsed-seconds");
const secondBtn = document.querySelector("#reading-start-button");
const readStatus = document.querySelector("#reading-status");
const secondsCounterSecond = document.querySelector("#reading-elapsed-seconds");
let startedAtMs = null;
let startedAtMsSecond = null;
let hasStarted = true;
let hasStartedSecond = true;
let intervalId = null;
let intervalIdSecond = null;

function handleStart() {
  // TODO: store the current timestamp, update the status, and disable Start.
  // get current time and store it
  if (hasStarted) {
    let timeNow = Date.now();
    // how to set the startedAtMs and store it in somewhere to get it when 2nd click
    // get the time when first click, but when you next click, the startedAtMs will change
    startedAtMs = timeNow;
    statusText.textContent = "计时中";
    // set the secondsCounter sequentially
    intervalId = setInterval(() => {
      secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
    }, 1000);
    startButton.textContent = "结束计时";
    hasStarted = false;
  } else {
    statusText.textContent = "已结束";
    clearInterval(intervalId);
    secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
    startButton.textContent = "已结束";
    startButton.disabled = true;
  }
}
function handleSecond() {
  // TODO: store the current timestamp, update the status, and disable Start.
  // get current time and store it
  if (hasStartedSecond) {
    let timeNow = Date.now();
    // how to set the startedAtMs and store it in somewhere to get it when 2nd click
    // get the time when first click, but when you next click, the startedAtMs will change
    startedAtMsSecond = timeNow;
    readStatus.textContent = "计时中";
    // set the secondsCounter sequentially
    intervalIdSecond = setInterval(() => {
      secondsCounterSecond.textContent = getElapsedSeconds(
        startedAtMsSecond,
        Date.now(),
      );
    }, 1000);
    secondBtn.textContent = "结束计时";
    hasStartedSecond = false;
  } else {
    readStatus.textContent = "已结束";
    clearInterval(intervalIdSecond);
    secondsCounterSecond.textContent = getElapsedSeconds(
      startedAtMsSecond,
      Date.now(),
    );
    secondBtn.textContent = "已结束";
    secondBtn.disabled = true;
  }
}

// The event wiring and diagnostic output are supplied for this exercise.
startButton.addEventListener("click", () => {
  handleStart();
  console.log("Start timestamp (ms):", startedAtMs);
});

secondBtn.addEventListener("click", () => {
  handleSecond();
  console.log("Start timestamp (ms):", startedAtMsSecond);
});

// References / help used:
