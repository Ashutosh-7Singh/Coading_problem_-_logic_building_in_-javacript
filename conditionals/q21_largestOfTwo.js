/**
 * Q21 - Find the largest of two numbers
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [10,20] => Output: 20
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q21: Find the largest of two numbers
const lib = require('../if_else/level2_basic_logic');

function solve(a, b) {
  return lib.check21_largestOfTwo(a, b);
}

function runExample() {
  console.log('Q21 sample:', solve(10, 20));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Find the largest of two numbers' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      10,
      20
    ],
    "expected": 20
  }
];
module.exports.tests = __tests;
