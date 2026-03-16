"""
Problem: Convert_number_to_reversed_array_of_digits
Difficulty: 8kyu
Date: 2026-03-14
"""

/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]*/

//my solution:
function digitize(n) {
  //code here
  return String(n).split("").map(e=> Number(e)).reverse();
}

//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});
