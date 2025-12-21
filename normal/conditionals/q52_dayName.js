/**
 * Q52 - Return day name from number
 *
 * Problem statement:
 * Convert a numeric day index (1-7) into the corresponding weekday name.
 *
 * Input:
 * - A single integer `dayNo` (1=Monday, 2=Tuesday, ..., 7=Sunday typically).
 *
 * Output:
 * - Return or print the name of the day as a string (e.g., 'Wednesday').
 * - For invalid inputs, print a helpful message or handle as the tests expect.
 *
 * Examples:
 * - Input: 3 => Output: 'Wednesday'
 * - Input: 7 => Output: 'Sunday'
 *
 * Edge cases:
 * - Values outside the 1-7 range should be validated.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q52: Print day name using switch case
const lib = require('../if_else/level3_real_world');

function solve(dayNo) {
  return lib.check52_dayName(dayNo);
}

function runExample() {
  console.log('Q52 sample (3):', solve(3));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Return day name from number' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3
    ],
    "expected": "Wednesday"
  }
];
module.exports.tests = __tests;
