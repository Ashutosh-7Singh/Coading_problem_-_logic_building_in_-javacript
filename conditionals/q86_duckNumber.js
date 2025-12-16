/**
 * Q86 - Duck number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 1023 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q86: Check if a number is duck number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check86_duckNumber(n);
}

function runExample() {
  console.log('Q86 sample (1023):', solve(1023));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Duck number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      1023
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
