/**
 * Q40 - Check perfect square
 *
 * Problem statement:
 * Determine whether a given non-negative integer `n` is a perfect square (i.e., there exists
 * an integer `k` such that k*k === n).
 *
 * Input:
 * - A single numeric value `n` (non-negative integer expected).
 *
 * Output:
 * - Return or print `true` if `n` is a perfect square, otherwise `false`.
 *
 * Constraints & notes:
 * - Use integer sqrt checks (`Math.sqrt(n)` and verify `Math.floor(sqrt)**2 === n`).
 * - Negative inputs are not perfect squares.
 *
 * Examples:
 * - Input: 49 => Output: true
 * - Input: 50 => Output: false
 *
 * Edge cases:
 * - Zero (0) is a perfect square (0*0 = 0).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q40: Check if a number is a perfect square
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check40_perfectSquare(n);
}

function runExample() {
  console.log('Q40 sample (49):', solve(49));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check perfect square' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      49
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
