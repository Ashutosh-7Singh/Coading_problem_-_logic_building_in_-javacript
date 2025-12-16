/**
 * Q80 - Validate date
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [29,2,2024] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q80: Validate date (day, month, year)
const lib = require('../if_else/level4_intermediate_logic');

function solve(day, month, year) {
  return lib.check80_validateDate(day, month, year);
}

function runExample() {
  console.log('Q80 sample (29,2,2024):', solve(29,2,2024));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Validate date' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      29,
      2,
      2024
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
