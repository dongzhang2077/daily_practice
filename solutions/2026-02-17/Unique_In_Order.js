/*
Problem: Unique_In_Order
Difficulty: 6kyu
Date: 2026-02-17
*/

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  //保留第一个数据，然后比较数据和它前一个数据是否相同，相同则跳过，否则保留
  // 使用filter进行数据筛选
  let arr = [...iterable];
  return arr.filter((e,i,arr) => i === 0 || e !== arr[i - 1]);
}