/**
 * Q19 - Check between 1 and 50
 *
 * Problem statement:
 * Determine whether a given number `n` lies in the inclusive range 1 to 50.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print `true` if `1 <= n && n <= 50`, otherwise `false`.
 *
 * Constraints & notes:
 * - Non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: 25 => Output: true
 * - Input: 0  => Output: false
 *
 * Edge cases:
 * - Exactly 1 and 50 are included in the valid range.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q19: Check if a number lies between 1 and 50
// Implement `solve(n)` to return: true if 1 <= n <= 50, else false.

const lib = require('../if_else/if_else_examples');

function between1To(num){
  if (num >=1 && num <= 50){
    console.log("Between 1 to 50")
  }else console.log("not")
}
 between1To(129)