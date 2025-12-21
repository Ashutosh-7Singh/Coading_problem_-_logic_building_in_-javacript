/**
 * Q19 - Check between 1 and 50
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
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