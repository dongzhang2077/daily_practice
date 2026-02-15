/*
Problem: dig_pow
Difficulty: 6kyu
Date: 2026-02-14
URL: https://www.codewars.com/kata/5552101f47fc5178b1000050

Description:
Given two positive integers n and p, find a positive integer k such that
the sum of the digits of n raised to consecutive powers starting from p
equals k * n.

  (a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n * k

Return k if it exists, otherwise return -1.

Examples:
89, 1     --> 1   (8^1 + 9^2 = 89 = 89 * 1)
92, 1     --> -1  (no k exists)
695, 2    --> 2   (6^2 + 9^3 + 5^4 = 1390 = 695 * 2)
46288, 3  --> 51  (4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51)
*/

// My Solution
function digPow(n, p){
    const numbers = String(n).split('');
    const sum = numbers.reduce((acc, curr, index) => acc + Math.pow(curr, p + index), 0);
    return Number.isInteger(sum / n) ? sum / n : -1;
}
