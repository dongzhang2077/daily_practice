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

function setupTimer(button, statusText, secondsCounter) {
  let startedAtMs = null;
  let isFirstClick = true;
  let intervalId = null;

  button.addEventListener("click", () => {
    // Move the existing start/stop logic here.
    if (isFirstClick) {
      let timeNow = Date.now();
      startedAtMs = timeNow;
      statusText.textContent = "计时中";
      // set the secondsCounter sequentially
      intervalId = setInterval(() => {
        secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
      }, 1000);
      button.textContent = "结束计时";
      isFirstClick = false;
    } else {
      statusText.textContent = "已结束";
      clearInterval(intervalId);
      secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
      button.textContent = "已结束";
      button.disabled = true;
    }
  });
}

setupTimer(startButton, statusText, secondsCounter);
setupTimer(secondBtn, readStatus, secondsCounterSecond);
