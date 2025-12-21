/**
 * Q51 - Weekday or Weekend
 *
 * Problem statement:
 * Given a day number (1-7), determine whether it corresponds to a weekday or weekend.
 * Typical mapping: 1=Monday ... 7=Sunday; weekend days are usually 6 and 7.
 *
 * Input:
 * - A single integer `dayNo` (1-7 expected).
 *
 * Output:
 * - Return or print 'Weekday' for days 1-5 and 'Weekend' for days 6-7. For invalid day numbers,
 *   print a helpful message or handle as tests expect.
 *
 * Examples:
 * - Input: 6 => Output: 'Weekend'
 * - Input: 3 => Output: 'Weekday'
 *
 * Edge cases:
 * - If the day number is outside 1-7, implementations should validate the input.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q51: Check if day number is weekday or weekend
const lib = require('../if_else/level3_real_world');

function solve(dayNo) {
  return lib.check51_weekdayOrWeekend(dayNo);
}

function runExample() {
  console.log('Q51 sample (6):', solve(6));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Weekday or Weekend' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      6
    ],
    "expected": "Weekend"
  }
];
module.exports.tests = __tests;
