/**
 * Q84 - Sunny number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 8 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q84: Check if a number is sunny number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check84_sunnyNumber(n);
}

function runExample() {
  console.log('Q84 sample (8):', solve(8));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Sunny number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      8
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
