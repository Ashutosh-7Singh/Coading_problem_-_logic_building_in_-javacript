/**
 * Q22 - Find the smallest of two numbers
 *
 * Problem statement:
 * Given two numeric values `a` and `b`, determine and return the smaller value.
 *
 * Input:
 * - Two numeric values `a` and `b`.
 *
 * Output:
 * - Return or print the smaller of the two numbers. If equal, return either value.
 *
 * Constraints & notes:
 * - Use strict numeric comparison. Non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [10,20] => Output: 10
 * - Input: [5,5]   => Output: 5
 *
 * Edge cases:
 * - Negative numbers are allowed and compared as usual.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q22: Find the smallest of two numbers
const lib = require('../if_else/level2_basic_logic');

function solve(a, b) {
  return lib.check22_smallestOfTwo(a, b);
}

function runExample() {
  console.log('Q22 sample:', solve(10, 20));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Find the smallest of two numbers' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      10,
      20
    ],
    "expected": 10
  }
];
module.exports.tests = __tests;
