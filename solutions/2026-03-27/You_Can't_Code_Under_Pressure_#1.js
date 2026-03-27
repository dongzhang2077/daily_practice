/*
Problem: You_Can't_Code_Under_Pressure_#1
Difficulty: 8kyu
Date: 2026-03-27
*/

/*You Can't Code Under Pressure #1
Code as fast as you can! You need to double the integer and return it.*/



//my solution:
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return 2* i;
}
//Sample Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(doubleInteger(2), 4);
  });
});
