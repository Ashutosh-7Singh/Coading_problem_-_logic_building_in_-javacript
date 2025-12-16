/**
 * Q51 - Weekday or Weekend
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 6 => Output: "Weekend"
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
