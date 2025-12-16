/**
 * Q87 - Tech number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 2025 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q87: Check if a number is tech number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check87_techNumber(n);
}

function runExample() {
  console.log('Q87 sample (2025):', solve(2025));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Tech number check' };


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
