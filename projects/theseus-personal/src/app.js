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

  //刷新，页面加载时
  if (getStorage(button)) {
    isFirstClick = false;
    statusText.textContent = "计时中";
    startedAtMs = getStorage(button);
    secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
    intervalId = setInterval(() => {
      secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
    }, 1000);
    button.textContent = "结束计时";
  }

  button.addEventListener("click", () => {
    // Move the existing start/stop logic here.
    if (isFirstClick) {
      startedAtMs = getStorage(button) ? getStorage(button) : Date.now();
      statusText.textContent = "计时中";
      // 保存startedAtMs, 如果原本就没有，那就初始化，否则不初始化
      if (!getStorage(button)) {
        populateStorage(button, startedAtMs);
      }
      // set the secondsCounter sequentially
      // 现在我需要的是，会监测并更新，所有的button以及文字的状态，这种实际上react会做
      intervalId = setInterval(() => {
        secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
      }, 1000);
      button.textContent = "结束计时";
      isFirstClick = false;
    } else {
      statusText.textContent = "已结束";
      clearInterval(intervalId);
      secondsCounter.textContent = getElapsedSeconds(startedAtMs, Date.now());
      localStorage.removeItem(button.id);
      button.textContent = "已结束";
      button.disabled = true;
    }
  });
}

// 为了实现当前功能，需求是将每个活动对应的starttime交由local保存
function populateStorage(button, startedAtMs) {
  //将button转换成string
  const buttonVar = button.id;
  //验证是否为空，等于每个btn，最多只能存一个startedAtMs
  //没必要，因为setItem自己可以做这个，即存在会覆盖原值
  localStorage.setItem(buttonVar, startedAtMs);
}
// 刷新页面之后，需要重新触发对应的function，继续计时
function getStorage(button) {
  const buttonVar = button.id;
  const startedAtMs = localStorage.getItem(buttonVar)
    ? localStorage.getItem(buttonVar)
    : -1;
  if (startedAtMs >= 0) {
    return startedAtMs;
  }
}

setupTimer(startButton, statusText, secondsCounter);
setupTimer(secondBtn, readStatus, secondsCounterSecond);
