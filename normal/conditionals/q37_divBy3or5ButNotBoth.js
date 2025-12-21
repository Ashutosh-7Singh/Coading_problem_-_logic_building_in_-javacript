/**
 * Q37 - Divisible by 3 or 5 but not both
 *
 * Problem statement:
 * Given an integer `n`, determine whether it is divisible by 3 or 5 but not both (exclusive or).
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if exactly one of `n % 3 === 0` or `n % 5 === 0` holds, otherwise `false`.
 *
 * Constraints & notes:
 * - Zero is divisible by both 3 and 5 so would yield `false` for this check.
 *
 * Examples:
 * - Input: 9  => Output: true (divisible by 3 only)
 * - Input: 10 => Output: true (divisible by 5 only)
 * - Input: 15 => Output: false (divisible by both)
 *
 * Edge cases:
 * - Negative numbers follow the same divisibility logic.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q37: Check if a number is divisible by 3 or 5 but not both
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check37_divBy3or5ButNotBoth(n);
}

function runExample() {
  console.log('Q37 sample (9):', solve(9));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 3 or 5 but not both' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      9
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
