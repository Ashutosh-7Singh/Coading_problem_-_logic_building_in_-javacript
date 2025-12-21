/**
 * Q62 - Divisible by all non-zero digits
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 128 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q62: Check if a number is divisible by all digits (except 0)
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check62_divisibleByAllDigits(n);
}

function runExample() {
  console.log('Q62 sample (128):', solve(128));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by all non-zero digits' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      128
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
