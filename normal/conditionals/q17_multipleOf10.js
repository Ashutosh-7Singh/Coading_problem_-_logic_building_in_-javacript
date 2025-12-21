/**
 * Q17 - Check multiple of 10
 *
 * Problem statement:
 * Determine whether a numeric input `n` is a multiple of 10.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print `true` if `n % 10 === 0`, otherwise `false`.
 *
 * Constraints & notes:
 * - Negative numbers follow the same rule.
 * - Non-integer inputs may be validated or coerced depending on tests.
 *
 * Examples:
 * - Input: 20 => Output: true
 * - Input: 23 => Output: false
 *
 * Edge cases:
 * - Zero (0) is a multiple of 10 and should return true.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q17: Check if a number is a multiple of 10
// Implement `solve(n)` to return: true if n % 10 === 0, else false.

const lib = require('../if_else/if_else_examples');

function multipleOf10(num){
  if(typeof num !== 'number') return false
   if (num % 10 ===0 ){
    console.log("divisible to 10")
   }else console.log("Not divisible by 10")
}

multipleOf10(11)