/**
 * Q72 - Positive even or negative odd check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: -3 => Output: "Negative and odd"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q72: Check if a number is positive and even or negative and odd
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check72_posEvenOrNegOdd(n);
}

function runExample() {
  console.log('Q72 sample (-3):', solve(-3));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Positive even or negative odd check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      -3
    ],
    "expected": "Negative and odd"
  }
];
module.exports.tests = __tests;
