/**
 * Q81 - Strong number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 145 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q81: Check if a number is strong number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check81_strongNumber(n);
}

function runExample() {
  console.log('Q81 sample (145):', solve(145));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Strong number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      145
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
