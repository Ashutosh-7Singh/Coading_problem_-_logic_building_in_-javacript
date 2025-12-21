/**
 * Q96 - Validate time format
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "23:59" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q96: Validate time format (HH:MM)
const lib = require('../if_else/level5_challenging_conditional');

function solve(timeStr) {
  return lib.check96_validateTimeFormat(timeStr);
}

function runExample() {
  console.log('Q96 sample (23:59):', solve('23:59'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Validate time format' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "23:59"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
