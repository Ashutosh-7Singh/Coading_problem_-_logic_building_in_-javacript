/**
 * Q36 - Divisible by 8 and 12
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 24 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q36: Check if a number is divisible by 8 and 12
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check36_divisibleBy8And12(n);
}

function runExample() {
  console.log('Q36 sample (24):', solve(24));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 8 and 12' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      24
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
