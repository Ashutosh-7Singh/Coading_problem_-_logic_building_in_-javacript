/**
 * Q28 - Divisible by 4 but not by 6
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 8 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q28: Check if a number is divisible by 4 but not by 6
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check28_divBy4Not6(n);
}

function runExample() {
  console.log('Q28 sample (8):', solve(8));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 4 but not by 6' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      8
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
