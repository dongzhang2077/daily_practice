/*
Problem: Number of People in the Bus
Difficulty: 7kyu
Date: 2026-02-15
URL: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

Description:
Calculate the number of people remaining on the bus after the last stop.
Given an array of [on, off] pairs representing people getting on/off at each stop.
*/

// My Solution
var number = function(busStops){
  // Use destructuring assignment to extract [on, off] values from each pair
  // reduce accumulates: current_count + people_on - people_off
  // Key learning: destructuring in reduce callback makes code cleaner
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
}

// Test cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
    assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    assert.strictEqual(number([[0,0]]),0);
  });
});
