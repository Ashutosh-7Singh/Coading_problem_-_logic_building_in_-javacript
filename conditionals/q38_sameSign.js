/**
 * Q38 - Check if two numbers have the same sign
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [5,-3] => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q38: Check if two numbers have the same sign
const lib = require('../if_else/level2_basic_logic');

function solve(a, b) {
  return lib.check38_sameSign(a, b);
}

function runExample() {
  console.log('Q38 sample (5, -3):', solve(5, -3));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if two numbers have the same sign' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      5,
      -3
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
