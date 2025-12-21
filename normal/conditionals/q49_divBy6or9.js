/**
 * Q49 - Divisible by 6 or 9
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 18 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q49: Check if a number is divisible by 6 or 9
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check49_divBy6or9(n);
}

function runExample() {
  console.log('Q49 sample (18):', solve(18));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 6 or 9' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      18
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
