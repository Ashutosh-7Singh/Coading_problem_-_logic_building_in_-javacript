/**
 * Q70 - Driving license eligibility
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 18 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q70: Check if a person is eligible for driving license
const lib = require('../if_else/level4_intermediate_logic');

function solve(age) {
  return lib.check70_drivingLicense(age);
}

function runExample() {
  console.log('Q70 sample (18):', solve(18));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Driving license eligibility' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      18
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
