/**
 * Q54 - Return number of days in month
 *
 * Problem statement:
 * Given a month number and an optional year, return the number of days in that month.
 * February should account for leap years (29 days in leap years, 28 otherwise).
 *
 * Input:
 * - `monthNo` (integer 1-12), and optional `year` (integer) to determine February length.
 *
 * Output:
 * - Return or print the number of days in the month as an integer.
 *
 * Constraints & notes:
 * - If `year` is omitted, some implementations may assume non-leap-year behavior or use a default.
 * - Use leap-year rules: divisible by 400 or (divisible by 4 and not by 100).
 *
 * Examples:
 * - Input: [2, 2024] => Output: 29
 * - Input: [4]      => Output: 30
 *
 * Edge cases:
 * - Invalid month numbers (outside 1-12) should be validated.
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
