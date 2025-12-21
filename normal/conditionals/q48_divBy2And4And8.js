/**
 * Q48 - Divisible by 2, 4, and 8
 *
 * Problem statement:
 * Determine whether an integer `n` is divisible by 2, by 4, and by 8 simultaneously.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if `n` is divisible by 8 (which implies divisibility by 4 and 2), otherwise `false`.
 *
 * Constraints & notes:
 * - Divisibility by 8 is sufficient to imply divisibility by 2 and 4.
 *
 * Examples:
 * - Input: 64 => Output: true
 * - Input: 12 => Output: false
 *
 * Edge cases:
 * - Zero is divisible by any non-zero integer; check test expectations for zero.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q48: Check if a number is divisible by 2, 4, and 8
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check48_divBy2And4And8(n);
}

function runExample() {
  console.log('Q48 sample (64):', solve(64));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 2, 4, and 8' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      64
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
