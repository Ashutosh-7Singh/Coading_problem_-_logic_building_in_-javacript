/**
 * Q31 - Check if a number is prime
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 97 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q31: Check if a number is prime (basic logic)
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check31_isPrime(n);
}

function runExample() {
  console.log('Q31 sample (97):', solve(97));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if a number is prime' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      97
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
