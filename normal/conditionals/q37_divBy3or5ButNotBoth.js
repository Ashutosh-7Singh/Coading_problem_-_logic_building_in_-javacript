/**
 * Q37 - Divisible by 3 or 5 but not both
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 9 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q37: Check if a number is divisible by 3 or 5 but not both
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check37_divBy3or5ButNotBoth(n);
}

function runExample() {
  console.log('Q37 sample (9):', solve(9));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 3 or 5 but not both' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      9
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
