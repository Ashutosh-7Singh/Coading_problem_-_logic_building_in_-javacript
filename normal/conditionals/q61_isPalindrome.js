/**
 * Q61 - Check palindrome (no loops)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 121 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q61: Check if a number is palindrome (without loops)
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check61_isPalindrome(n);
}

function runExample() {
  console.log('Q61 sample (121):', solve(121));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check palindrome (no loops)' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      121
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
