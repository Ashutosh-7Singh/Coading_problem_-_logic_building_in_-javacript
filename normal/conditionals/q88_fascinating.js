/**
 * Q88 - Fascinating number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 192 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q88: Check if a number is fascinating number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check88_fascinating(n);
}

function runExample() {
  console.log('Q88 sample (192):', solve(192));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Fascinating number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      192
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
