/**
 * Q54 - Return number of days in month
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [2,2024] => Output: 29
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q54: Check if a month has 30 or 31 days (and February handling)
const lib = require('../if_else/level3_real_world');

function solve(monthNo, year = null) {
  return lib.check54_monthDays(monthNo, year);
}

function runExample() {
  console.log('Q54 sample (2,2024):', solve(2,2024));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Return number of days in month' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      2,
      2024
    ],
    "expected": 29
  }
];
module.exports.tests = __tests;
