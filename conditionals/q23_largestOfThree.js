/**
 * Q23 - Find the largest of three numbers
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [5,12,9] => Output: 12
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
