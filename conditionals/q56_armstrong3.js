/**
 * Q56 - Check Armstrong (3-digit)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 153 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q56: Check if a number is Armstrong (3-digit)
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check56_armstrong3(n);
}

function runExample() {
  console.log('Q56 sample (153):', solve(153));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check Armstrong (3-digit)' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      153
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
