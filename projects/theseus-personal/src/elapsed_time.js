/*
Theseus personal timer: display elapsed whole seconds.
Source: learner-proposed timestamp-difference approach; AI-prepared contract.
Implementation: pending learner work.

Inputs are valid millisecond timestamps, with currentTimeMs >= startedAtMs.
Return elapsed whole seconds, discarding any incomplete second.
Equal timestamps return 0.
Use the supplied timestamps; do not read the clock inside this function.
*/

export function getElapsedSeconds(startedAtMs, currentTimeMs) {
  // TODO: implement the required calculation.
  return Math.floor((currentTimeMs - startedAtMs) / 1000);
}

// References / help used:
