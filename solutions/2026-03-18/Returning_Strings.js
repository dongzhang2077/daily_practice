/*
Problem: Returning_Strings
Difficulty: 8kyu
Date: 2026-03-18
*/

/*Returning Strings
Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]*/

//my solution:
function greet(name){
  //your code here
  return "Hello, "+ name+ " how are you doing today?";
}
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})
