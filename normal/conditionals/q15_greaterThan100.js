/**
 * Q15 - Check if greater than 100
 *
 * Problem statement:
 * Determine whether a given numeric value `n` is strictly greater than 100.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print `true` if `n > 100`, otherwise `false`.
 *
 * Constraints & notes:
 * - Non-numeric inputs should be validated and handled appropriately.
 *
 * Examples:
 * - Input: 150 => Output: true
 * - Input: 100 => Output: false
 *
 * Edge cases:
 * - Very large numbers still follow the same comparison rules.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q15: Check if a number is greater than 100
// Implement `solve(n)` to return: true if n > 100, else false.

const lib = require('../if_else/if_else_examples');

function greateThan100(num){
  if (typeof num !== 'number'){
     console.log("Wrong Input")
  }
  if(num > 100){return true }else return false
}
console.log(greateThan100(1000))