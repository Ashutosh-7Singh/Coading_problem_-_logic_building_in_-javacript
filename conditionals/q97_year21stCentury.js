/**
 * Q97 - 21st century year check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 2025 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q97: Check if a year belongs to 21st century
const lib = require('../if_else/level5_challenging_conditional');

function solve(year) {
  return lib.check97_year21stCentury(year);
}

function runExample() {
  console.log('Q97 sample (2025):', solve(2025));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: '21st century year check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      2025
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
