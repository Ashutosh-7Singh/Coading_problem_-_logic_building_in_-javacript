/**
 * Q38 - Check if two numbers have the same sign
 *
 * Problem statement:
 * Given two numeric values `a` and `b`, determine whether they have the same sign (both
 * non-negative or both negative).
 *
 * Input:
 * - Two numeric values `a` and `b`.
 *
 * Output:
 * - Return or print `true` if both numbers have the same sign (both >= 0 or both < 0), otherwise `false`.
 *
 * Constraints & notes:
 * - Zero is considered non-negative (same sign as positive numbers) in most conventions.
 *
 * Examples:
 * - Input: (5, 3)   => Output: true
 * - Input: (-2, -5) => Output: true
 * - Input: (5, -3)  => Output: false
 *
 * Edge cases:
 * - One or both inputs being zero should be handled according to the chosen convention (commonly same sign with non-negative).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q38: Check if two numbers have the same sign
const lib = require('../if_else/level2_basic_logic');

function solve(a, b) {
  return lib.check38_sameSign(a, b);
}

function runExample() {
  console.log('Q38 sample (5, -3):', solve(5, -3));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if two numbers have the same sign' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      5,
      -3
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
