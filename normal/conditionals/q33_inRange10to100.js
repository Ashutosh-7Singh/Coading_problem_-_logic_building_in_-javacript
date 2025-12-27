/**
 * Q33 - Check if number is within 10 to 100
 *
 * Problem statement:
 * Determine whether a given number `n` lies in the inclusive range from 10 to 100.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print `true` if `10 <= n && n <= 100`, otherwise `false`.
 *
 * Constraints & notes:
 * - Non-numeric inputs should be validated by the implementation.
 *
 * Examples:
 * - Input: 50 => Output: true
 * - Input: 9  => Output: false
 *
 * Edge cases:
 * - Exactly 10 and 100 should be considered inside the range.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q33: Check if a number is within the range 10 to 100
const lib = require('../if_else/level2_basic_logic');

function inRange(value){
  if(!Number.isInteger(value)){
    console.log("Not a Integer")
    return;
  }

  if (value >= 10 && value<=100){
return true
  }else{
    return false
  }



}
console.log(inRange(239))