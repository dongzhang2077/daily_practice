"""
Problem: String_ends_with?
Difficulty: 7kyu
Date: 2026-03-09
"""

/*String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false*/

//my solution:
function solution(str, ending){
  // TODO: complete
  return str.endsWith(ending);
}


//Sample Tests

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe("solution", function() {
  it("Sample Tests", function() {
    tester('abcde', 'cde', true);
    tester('abcde', 'abc', false);
    tester('empty ending', '', true);
    tester('', 'empty string', false);
    tester('', '', true);
  });

  function tester(str, ending, expected) {
    const err_msg = `Failed for inputs:\n- str: "${str}"\n- ending: "${ending}"\n\n`;
    assert.strictEqual(solution(str, ending), expected, err_msg);
  };
});
