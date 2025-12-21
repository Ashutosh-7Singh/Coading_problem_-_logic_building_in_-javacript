/**
 * Q90 - Keith number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 197 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q90: Check if a number is Keith number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check90_keithNumber(n);
}

function runExample() {
  console.log('Q90 sample (197):', solve(197));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Keith number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      197
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
