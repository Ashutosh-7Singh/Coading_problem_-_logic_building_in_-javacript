/**
 * Q50 - Assign grade from percentage
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 76 => Output: "B"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q50: Assign grades based on percentage
const lib = require('../if_else/level3_real_world');

function solve(percent) {
  return lib.check50_assignGrade(percent);
}

function runExample() {
  console.log('Q50 sample (76):', solve(76));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Assign grade from percentage' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      76
    ],
    "expected": "B"
  }
];
module.exports.tests = __tests;
