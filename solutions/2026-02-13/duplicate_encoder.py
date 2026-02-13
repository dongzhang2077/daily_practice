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

# JavaScript Solution
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

# Python Equivalent Solution
def duplicate_encode(word):
    """
    Convert string to encoded format based on character frequency.
    
    Args:
        word: Input string
        
    Returns:
        Encoded string with '(' for unique chars and ')' for duplicates
    """
    # Convert to lowercase for case-insensitive comparison
    word_lower = word.lower()
    
    # Count character frequencies
    char_count = {}
    for char in word_lower:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Build output based on frequency
    output = ""
    for char in word_lower:
        if char_count[char] == 1:
            output += "("
        else:
            output += ")"
    
    return output


# Alternative Python Solution (More Pythonic)
def duplicate_encode_v2(word):
    """One-liner using list comprehension and count method."""
    word_lower = word.lower()
    return ''.join('(' if word_lower.count(c) == 1 else ')' for c in word_lower)


# Test cases
if __name__ == "__main__":
    test_cases = [
        ("din", "((("),
        ("recede", "()()()"),
        ("Success", ")())())"),
        ("(( @", "))(("),
    ]
    
    for input_str, expected in test_cases:
        result = duplicate_encode(input_str)
        status = "✓" if result == expected else "✗"
        print(f"{status} duplicate_encode('{input_str}') => '{result}' (expected '{expected}')")
