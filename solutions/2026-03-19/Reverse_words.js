/*
Problem: Reverse_words
Difficulty: 7kyu
Date: 2026-03-19
*/

/*Reverse words
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

//my solution:
function reverseWords(str) {
  // Go for it
  return str.split(" ").map(e => e.split("").reverse().join("")).join(" ");
}
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
    assert.strictEqual(reverseWords('apple'), 'elppa', `Input: "apple"`);
    assert.strictEqual(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
    assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);
  });
});


// Reflection: join() 默认用, 连接