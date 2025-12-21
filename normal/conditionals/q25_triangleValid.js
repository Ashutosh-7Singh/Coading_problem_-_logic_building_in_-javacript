/**
 * Q25 - Check triangle validity (sum=180)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [60,60,60] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q25: Check if a triangle is valid (sum of angles = 180)
const lib = require('../if_else/level2_basic_logic');

function validTriangle(a, b, c) {

  if (a > 0 && b > 0 && c > 0 && a + b + c === 180) {
    console.log("Valid Triangle");
  } else {
    console.log("Invalid Triangle");
  }
}

validTriangle(60, 60, 60);
