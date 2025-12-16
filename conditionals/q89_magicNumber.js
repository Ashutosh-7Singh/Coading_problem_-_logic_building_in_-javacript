/**
 * Q89 - Magic number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 19 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q89: Check if a number is magic number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check89_magicNumber(n);
}

function runExample() {
  console.log('Q89 sample (19):', solve(19));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Magic number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      19
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
