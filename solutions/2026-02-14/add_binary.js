/*
Problem: add_binary
Difficulty: 7kyu
Date: 2026-02-14
URL: https://www.codewars.com/kata/551f37452ff852b7bd000139

Description:
Implement a function that adds two numbers together and returns their sum in binary.
The conversion can be done before, or after the addition.
The binary number returned should be a string.

Examples:
1, 1   --> "10"   (1 + 1 = 2 in decimal or 10 in binary)
5, 9   --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// My Solution
function addBinary(a,b) {
    //use the function convert decimal to binary
    return (a + b).toString(2);
}
