/**
 * Q29 - Divisible by 7 or 9
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 63 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q29: Check if a number is divisible by 7 or 9
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check29_divBy7or9(n);
}

function runExample() {
  console.log('Q29 sample (63):', solve(63));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 7 or 9' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      63
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
