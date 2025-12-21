/**
 * Q39 - Check Pythagorean triplet
 *
 * Problem statement:
 * Given three positive integers `a`, `b`, and `c`, determine whether they form a Pythagorean
 * triplet (i.e., whether a^2 + b^2 = c^2 for some ordering of a, b, c).
 *
 * Input:
 * - Three numeric values `a`, `b`, `c` (positive integers expected).
 *
 * Output:
 * - Return or print `true` if the three values form a Pythagorean triplet, otherwise `false`.
 *
 * Constraints & notes:
 * - Order of inputs may vary; check all permutations or sort and treat largest as hypotenuse.
 *
 * Examples:
 * - Input: [3,4,5] => Output: true
 * - Input: [5,12,13] => Output: true
 *
 * Edge cases:
 * - Zero or negative inputs are invalid for Pythagorean triplets.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q39: Check if three numbers form a Pythagorean triplet
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check39_pythagoreanTriplet(a, b, c);
}

function runExample() {
  console.log('Q39 sample (3,4,5):', solve(3,4,5));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check Pythagorean triplet' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3,
      4,
      5
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
