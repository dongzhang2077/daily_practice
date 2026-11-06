import { getElapsedSeconds } from '../src/elapsed_time.js';

// AI-provided checks. Expected to fail while the learner function is empty.
const sameTime = getElapsedSeconds(10000, 10000);
console.assert(sameTime === 0, 'Expected 0 seconds, actual:', sameTime);

const fiveSeconds = getElapsedSeconds(10000, 15000);
console.assert(fiveSeconds === 5, 'Expected 5 seconds, actual:', fiveSeconds);

const incompleteSecond = getElapsedSeconds(10000, 15900);
console.assert(
    incompleteSecond === 5,
    'Expected 5 whole seconds, actual:', incompleteSecond,
);

console.log('Check results:', { sameTime, fiveSeconds, incompleteSecond });
