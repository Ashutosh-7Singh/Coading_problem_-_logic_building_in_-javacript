/**
 * Q33 - Check if number is within 10 to 100
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 50 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q33: Check if a number is within the range 10 to 100
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check33_inRange10to100(n);
}

function runExample() {
  console.log('Q33 sample (50):', solve(50));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if number is within 10 to 100' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      50
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
