/**
 * Q24 - Find the smallest of three numbers
 *
 * Problem statement:
 * Given three numeric values `a`, `b`, and `c`, determine and return the smallest value.
 *
 * Input:
 * - Three numeric values `a`, `b`, `c`.
 *
 * Output:
 * - Return or print the smallest of the three numbers. If more than one share the minimum,
 *   return any one of them.
 *
 * Constraints & notes:
 * - Use numeric comparisons; non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [5,12,9] => Output: 5
 * - Input: [3,3,7]  => Output: 3
 *
 * Edge cases:
 * - All equal numbers should return that value.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q24: Find the smallest of three numbers
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check24_smallestOfThree(a, b, c);
}

function runExample() {
  console.log('Q24 sample:', solve(5,12,9));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Find the smallest of three numbers' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      5,
      12,
      9
    ],
    "expected": 5
  }
];
module.exports.tests = __tests;
