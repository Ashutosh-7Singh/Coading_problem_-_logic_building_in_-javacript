/**
 * Q23 - Find the largest of three numbers
 *
 * Problem statement:
 * Given three numeric values `a`, `b`, and `c`, determine and return the largest value.
 *
 * Input:
 * - Three numeric values `a`, `b`, `c`.
 *
 * Output:
 * - Return or print the largest of the three numbers. If more than one share the maximum,
 *   return any one of them.
 *
 * Constraints & notes:
 * - Use numeric comparisons; non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [5,12,9] => Output: 12
 * - Input: [7,7,3]  => Output: 7
 *
 * Edge cases:
 * - All equal numbers should return that value.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q23: Find the largest of three numbers
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check23_largestOfThree(a, b, c);
}

function runExample() {
  console.log('Q23 sample:', solve(5,12,9));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Find the largest of three numbers' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      5,
      12,
      9
    ],
    "expected": 12
  }
];
module.exports.tests = __tests;
