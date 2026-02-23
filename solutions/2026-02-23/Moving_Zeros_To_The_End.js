/*
Problem: Moving_Zeros_To_The_End
Difficulty: 5kyu
Date: 2026-02-23
*/

/*Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

//my solution:
function moveZeros(arr) {
  // take everything except 0
  // get the nums of 0s, and push it to the arr
  const otherArr = arr.filter((e)=> e !== 0);
//   let counter = 0;
//   arr.forEach((e)=> {
//     if (e === 0){
//       counter ++;
//     }
//   });
  //refine the 0 counter
  const counter = arr.length - otherArr.length;
  for (let i = 0; i < counter; i++){
    otherArr.push(0);
  }
  return otherArr;
}


//Sample Tests

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});

// Reflection: set the timer to think of the algorithm, filter is good to get the arr u want.