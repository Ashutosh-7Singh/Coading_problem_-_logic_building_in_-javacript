/**
 * Q56 - Check Armstrong (3-digit)
 *
 * Problem statement:
 * Determine whether a given 3-digit number is an Armstrong number. For a 3-digit number,
 * an Armstrong number equals the sum of cubes of its digits (e.g., 153 = 1^3 + 5^3 + 3^3).
 *
 * Input:
 * - A single integer `n` (typically 3-digit for this exercise).
 *
 * Output:
 * - Return or print `true` if `n` is an Armstrong number, otherwise `false`.
 *
 * Constraints & notes:
 * - For general Armstrong checks, use length-power where power equals number of digits.
 * - This file's helper expects 3-digit Armstrong logic.
 *
 * Examples:
 * - Input: 153 => Output: true
 * - Input: 370 => Output: true
 *
 * Edge cases:
 * - Non-3-digit inputs should be handled according to test conventions.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q56: Check if a number is Armstrong (3-digit)
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check56_armstrong3(n);
}

function runExample() {
  console.log('Q56 sample (153):', solve(153));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check Armstrong (3-digit)' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      153
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
