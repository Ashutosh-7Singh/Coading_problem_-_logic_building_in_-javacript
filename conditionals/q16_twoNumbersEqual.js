/**
 * Q16 - Check if two numbers are equal
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "a, b" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q16: Check if two numbers are equal
// Implement `solve(a, b)` to return: true if equal, else false.

const lib = require('../if_else/if_else_examples');

function twoNumbers(a,b){
  if(typeof a !== 'number' && typeof b !== 'number') {
    console.log("Input is not a number");
    return;
  }

  if (a===b){
    return true
  }else{
    return false
  }
}
console.log(twoNumbers(2,2))