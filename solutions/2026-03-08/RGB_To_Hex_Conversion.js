"""
Problem: RGB_To_Hex_Conversion
Difficulty: 5kyu
Date: 2026-03-08
"""

/*RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"*/

//my solution:
function rgb(r, g, b) {
    let arr = [r,g,b];
    let arr1 = arr.map((e)=>{
      if (e < 0) {
        e = 0;
      }
      else if(e > 255){
        e = 255;
      }
      return e;
    });
    let arr2 = arr1.map(e=> 
      Number(e).toString(16).toUpperCase());
    return arr2.map(e=> e.length < 2 ? "0" + e: e).join('');
}

// advanced ref
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// or can use hex.padStart(2,'0') for the padding

//Sample Tests

describe("Tests", () => {

  const { strictEqual } = require('chai').assert;

  function doTest(r, g, b, expected) {
      const actual = rgb(r, g, b);
      const message = `for r = ${r} g = ${g} b = ${b}`;
      strictEqual(actual, expected, message);
  }

  it("Sample Tests", () => {
    doTest(  0,   0,   0, '000000');
    doTest(  0,   0, -20, '000000');
    doTest(300, 255, 255, 'FFFFFF');
    doTest(173, 255,  47, 'ADFF2F');
  });
});


# Reflection: slice() or padstart for padding. Using function to paralel dealing with issues.