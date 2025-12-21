/**
 * Q99 - Exam eligibility check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [80,50] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q99: Check eligibility for exam based on attendance and marks
const lib = require('../if_else/level5_challenging_conditional');

function solve(attendancePercent, marksPercent) {
  return lib.check99_examEligibility(attendancePercent, marksPercent);
}

function runExample() {
  console.log('Q99 sample (80,50):', solve(80,50));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Exam eligibility check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      80,
      50
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
