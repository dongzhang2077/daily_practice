/*
Problem: Roman_Numerals_Helper
Difficulty: 4kyu
Date: 2026-02-25
*/

/*Roman Numerals Helper
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
  86 -> "LXXXVI"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"LXXXVI"  ->   86
"I"       ->    1
Help
+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+

*/

//my solution:
class RomanNumerals {
  static toRoman(num) {
    const romanMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
    
    let result = '';
    
    for (let { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    
    return result;
  }

static fromRoman(str) {
  const romanMap = {
    'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1
  };
  
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    const current = romanMap[str[i]];
    const next = romanMap[str[i + 1]];
    
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  
  return result;
}
}
//Sample Tests

describe("sample tests", () => {

  const assert = require('chai').assert;

  it("to", () => {
    assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
    assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
    assert.strictEqual(RomanNumerals.toRoman(1), 'I');
    assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
    assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');
  });

  it("from", () => {
    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
  });
});

// Reflection: oberser the partern of the roman numbers and utilize the negative or positive of base unit such as I,X,C