/**
 * Q49 - Divisible by 6 or 9
 *
 * Problem statement:
 * Given an integer `n`, determine whether it is divisible by 6 or by 9 (or both).
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if `n % 6 === 0` or `n % 9 === 0`, otherwise `false`.
 *
 * Constraints & notes:
 * - Being divisible by 6 requires divisibility by both 2 and 3.
 *
 * Examples:
 * - Input: 18 => Output: true (divisible by both 6 and 9)
 * - Input: 12 => Output: true (divisible by 6)
 * - Input: 9  => Output: true (divisible by 9)
 *
 * Edge cases:
 * - Zero may be treated as divisible by both; check test conventions.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q49: Check if a number is divisible by 6 or 9
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check49_divBy6or9(n);
}

function runExample() {
  console.log('Q49 sample (18):', solve(18));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 6 or 9' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      18
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
