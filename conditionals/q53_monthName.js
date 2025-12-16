/**
 * Q53 - Return month name from number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 12 => Output: "December"
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
