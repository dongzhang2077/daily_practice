/*
Problem: Split_Strings
Difficulty: 6kyu
Date: 2026-02-22
*/

/*Split Strings
Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//my solution:
function solution(str){
  
//   const CombineStr = [...str];
//   let output = [];
//   for (let i = 0; i< CombineStr.length; i++){
//     let peciece = "";
//     if (i % 2 === 1){
//       peciece = CombineStr[i - 1] + CombineStr[i];
//       output.push(peciece);
//     }else if (i % 2 === 0 && i === CombineStr.length -1){
//       peciece = CombineStr[i] + "_";
//       output.push(peciece);
//     }
//   }
//   return output;
  //refined version
  return [...str].reduce((acc,curr, index)=>
       {             
    if (index % 2 === 0){
      acc.push(curr + (str[index + 1] || "_"));
    }
      return acc;
                }    
                   , [])
}



//Sample Tests

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});