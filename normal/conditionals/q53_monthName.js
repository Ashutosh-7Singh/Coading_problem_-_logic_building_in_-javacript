/**
 * Q53 - Return month name from number
 *
 * Problem statement:
 * Convert a numeric month index (1-12) into the corresponding month name.
 *
 * Input:
 * - A single integer `monthNo` (1=January ... 12=December).
 *
 * Output:
 * - Return or print the month name string (e.g., 'December').
 * - For invalid inputs, print a helpful message or handle as tests expect.
 *
 * Examples:
 * - Input: 12 => Output: 'December'
 * - Input: 1  => Output: 'January'
 *
 * Edge cases:
 * - Values outside 1-12 should be validated.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q53: Print month name using switch case
const lib = require('../if_else/level3_real_world');

function solve(monthNo) {
  return lib.check53_monthName(monthNo);
}

function runExample() {
  console.log('Q53 sample (12):', solve(12));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Return month name from number' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      12
    ],
    "expected": "December"
  }
];
module.exports.tests = __tests;
