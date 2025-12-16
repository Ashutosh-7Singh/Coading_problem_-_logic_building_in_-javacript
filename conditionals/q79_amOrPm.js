/**
 * Q79 - AM or PM check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 13 => Output: "PM"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q79: Check if time is AM or PM
const lib = require('../if_else/level4_intermediate_logic');

function solve(hour24) {
  return lib.check79_amOrPm(hour24);
}

function runExample() {
  console.log('Q79 sample (13):', solve(13));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'AM or PM check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      13
    ],
    "expected": "PM"
  }
];
module.exports.tests = __tests;
