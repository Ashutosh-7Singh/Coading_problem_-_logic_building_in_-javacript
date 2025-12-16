/**
 * Q52 - Return day name from number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 3 => Output: "Wednesday"
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
