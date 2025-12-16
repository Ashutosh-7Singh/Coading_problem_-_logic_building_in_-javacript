/**
 * Q12 - Check leap year
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q12: Check if a year is a leap year
// Implement `solve(year)` to return: true if leap year, else false.

const lib = require('../if_else/if_else_examples');

function solve(year) {
  return lib.check12_leapYear(year);
}

function runExample() {
  const sample = 2024;
  console.log('Q12 - Leap year - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check leap year' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
