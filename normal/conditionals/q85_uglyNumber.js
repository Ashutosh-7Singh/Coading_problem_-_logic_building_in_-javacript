/**
 * Q85 - Ugly number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 6 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q85: Check if a number is ugly number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check85_uglyNumber(n);
}

function runExample() {
  console.log('Q85 sample (6):', solve(6));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Ugly number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      6
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
