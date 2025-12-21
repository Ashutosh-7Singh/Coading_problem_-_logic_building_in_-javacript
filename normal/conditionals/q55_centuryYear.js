/**
 * Q55 - Check century year
 *
 * Problem statement:
 * Determine whether a given year is a century year (i.e., evenly divisible by 100).
 * Note: Century-year status is independent of leap-year rules; the latter uses additional
 * divisibility by 400.
 *
 * Input:
 * - A single integer `year`.
 *
 * Output:
 * - Return or print `true` if `year % 100 === 0`, otherwise `false`.
 *
 * Constraints & notes:
 * - This check differs from leap-year determination (a century year is not automatically a leap year).
 *
 * Examples:
 * - Input: 2000 => Output: true
 * - Input: 1900 => Output: true
 * - Input: 1999 => Output: false
 *
 * Edge cases:
 * - Negative or zero years should be handled as tests require (usually positive year values are used).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q55: Check if a year is a century year
const lib = require('../if_else/level3_real_world');

function solve(year) {
  return lib.check55_centuryYear(year);
}

function runExample() {
  console.log('Q55 sample (2000):', solve(2000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check century year' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      2000
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
