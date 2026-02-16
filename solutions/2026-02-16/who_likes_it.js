/*
Problem: Who likes it?
Difficulty: 6kyu
Date: 2026-02-16
URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

Description:
Create the text display for a "like" system. The function takes an array of names
and returns appropriate text based on the number of people who liked the item.
Rules: 0 names -> "no one likes this"
       1 name -> "Peter likes this"
       2 names -> "Jacob and Alex like this"
       3 names -> "Max, John and Mark like this"
       4+ names -> "Alex, Jacob and 2 others like this"
*/

// My Solution
function likes(names) {
    // Use conditional logic to determine output format based on array length
    // Key learning: Handle singular/plural grammar (likes vs like)
    // For 4+ names, only show first two and count the rest
    let output = "";
    if (!names.length) {
        output = "no one likes this";
    } else if(names.length === 1) {
        output = names[0] + " likes this";
    } else if(names.length === 2) {
        output = names[0] + " and " + names[1] + " like this";
    } else if(names.length === 3) {
        output = names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else if (names.length >= 4) {
        // Only access the first two elements, calculate remaining count
        output = names[0] + ", " + names[1] + " and "+ (names.length - 2) + " others like this";
    }
    return output;
}

// Reference: Optimized Solution with switch
/*
function likes(names) {
    // More concise approach using switch statement with template literals
    // Eliminates intermediate variable and direct returns
    switch(names.length) {
        case 0: return "no one likes this";
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}
*/

// Reference: Array-based Solution (most concise)
/*
function likes(names) {
    // Map array length to corresponding template string
    // Math.min ensures we don't exceed array bounds
    const templates = [
        "no one likes this",
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    ];
    return templates[Math.min(names.length, 4)];
}
*/

// Test cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('example tests', function() {
    it('should return correct text', function() {
        assert.strictEqual(likes([]), 'no one likes this');
        assert.strictEqual(likes(['Peter']), 'Peter likes this');
        assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
        assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
});
