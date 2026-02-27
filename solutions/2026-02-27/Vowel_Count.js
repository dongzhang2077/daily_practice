/*
Problem: Vowel_Count
Difficulty: 7kyu
Date: 2026-02-27
*/

/*Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

//my solution:
function getCount(str) {
  const vowels = ['a','e','i','o','u'];
  return str.toLowerCase()
    .split('')
  .filter(e=> vowels.includes(e))
  .length;
}

//Sample Tests

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

// Reflection: utilize arr.includes to judge the existence of elment