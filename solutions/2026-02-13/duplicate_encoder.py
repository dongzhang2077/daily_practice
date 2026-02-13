"""
Problem: duplicate_encoder
Difficulty: 6kyu
Date: 2026-02-13
URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

Description:
Convert a string to a new string where each character is:
- "(" if the character appears only once in the original string
- ")" if the character appears more than once
- Ignore capitalization when determining duplicates

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
"""

# My Solution
"""
function duplicateEncode(word){
    // Use a dictionary/map to count character occurrences
    // char c = word[i].toLowerCase()
    // if dictionary[c] exists, then
    // dictionary[c] += 1
    // otherwise dictionary[c] = 1
    // Then iterate through the string again in order
    // if dictionary[c] == 1, put "(" at this position
    // otherwise put ")"
    
    const dict = {};
    let output = "";
    
    // First pass: count character frequencies
    word.split('').forEach(char => {
        let c = char.toLowerCase();
        if (dict[c]){
            dict[c] += 1;
        }
        else{
            dict[c] = 1;
        }
    });
    
    // Second pass: build output string
    word.split('').forEach(char => {
        let c = char.toLowerCase();
        if (dict[c] === 1){
            output += "(";
        }
        else {
            output += ")";
        }
    });
    
    return output;
}
"""

# Reference: Better Solution
"""
function duplicateEncode(word){
  const lower = word.toLowerCase();
  return [...lower].map(c => 
    lower.split(c).length > 2 ? ')' : '('
  ).join('');
}

Explanation:
- split(c) splits the string by character c
- If c appears 2 times, split creates 3 segments
- If c appears 1 time, split creates 2 segments
- Clever use of split() to count occurrences without explicit counting
"""
