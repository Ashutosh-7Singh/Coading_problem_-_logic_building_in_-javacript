/**
 * Q24 - Find the smallest of three numbers
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [5,12,9] => Output: 5
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
