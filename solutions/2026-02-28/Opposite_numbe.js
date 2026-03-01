/*
Problem: Opposite_numbe
Difficulty: 8kyu
Date: 2026-02-28
*/

/*Opposite numbe
Very simple, given a number, find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34*/

//my solution:
function opposite(number) {
  //your code here
  return - number;
}

//Sample Tests

const { assert } = require('chai');

describe('Fixed tests', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('should return -1', () => {
    assert.strictEqual(opposite(1), -1);
  });
  it('should return 0', () => {
    assert.strictEqual(opposite(0), 0);
  });
  it('should return -4.25', () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it('should return -3.3333333', () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('should return 12525220.3325', () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('should return 5', () => {
    assert.strictEqual(opposite(-5), 5);
  });
});

// Reflection: piece of cake for warming up