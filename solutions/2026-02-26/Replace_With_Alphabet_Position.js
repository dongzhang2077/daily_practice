/*
Problem: Replace_With_Alphabet_Position
Difficulty: 6kyu
Date: 2026-02-26
*/

/*Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

//my solution:
 function alphabetPosition(text) {
  
  // for string arr, 先全部lowercase，然后and tranverse it, 先判断，如果不在a-z之间，忽略， 如果在可以获得它对应的数字
  return text.toLowerCase()
    .split('')
  .filter(char=> char >= 'a' && char <= 'z')
  .map(char=> char.charCodeAt(0)-'a'.charCodeAt(0) + 1)
  .join(' ');
  

}

//Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
});