/**
 * Q93 - Validate mobile format
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "9876543210" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q93: Validate mobile number format
const lib = require('../if_else/level5_challenging_conditional');

function solve(mobile) {
  return lib.check93_validateMobile(mobile);
}

function runExample() {
  console.log('Q93 sample (9876543210):', solve('9876543210'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Validate mobile format' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "9876543210"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
