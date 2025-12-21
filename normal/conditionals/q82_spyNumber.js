/**
 * Q82 - Spy number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 1124 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q82: Check if a number is spy number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check82_spyNumber(n);
}

function runExample() {
  console.log('Q82 sample (1124):', solve(1124));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Spy number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      1124
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
