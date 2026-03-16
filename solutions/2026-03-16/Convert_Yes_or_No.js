/*
Problem: Convert_Yes_or_No
Difficulty: 8kyu
Date: 2026-03-16
*/

/*Convert boolean values to strings 'Yes' or 'No'.
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/

//my solution:
function boolToWord( bool ){
  //...
  return bool ? "Yes" : "No";
}
//Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });