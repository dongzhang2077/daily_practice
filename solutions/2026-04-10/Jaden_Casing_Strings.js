/*
Problem: Jaden_Casing_Strings
Difficulty: 7kyu
Date: 2026-04-10
*/

/*Jaden Casing Strings
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/



//my solution:
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(" ")
     .map(word => word[0].toUpperCase() + word.slice(1))
         .join(" ");
   }
  }
);

//Sample Tests

describe("Tests", () => {
  const { assert, config } = require('chai');
  config.truncateThreshold = 0;

  function doTest(input, expected) {
    const actual = input.toJadenCase();
    assert.strictEqual(actual, expected, `for string "${input}"\n`);
  }

  it('should extend the string prototype', function() {
    assert.property(String.prototype, 'toJadenCase', 'String.prototype should have a toJadenCase property');
    assert.typeOf(String.prototype.toJadenCase, 'function', 'toJadenCase() should be a function');
  });

  it("sample tests", () => {
    doTest("most trees are blue", "Most Trees Are Blue");
    doTest("How can mirrors be real if our eyes aren't real", "How Can Mirrors Be Real If Our Eyes Aren't Real");
  });
});
