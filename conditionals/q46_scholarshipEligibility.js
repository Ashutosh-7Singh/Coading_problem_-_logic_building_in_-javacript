/**
 * Q46 - Scholarship eligibility
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [88,400000] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q46: Check if a student is eligible for scholarship
const lib = require('../if_else/level3_real_world');

function solve(marksPercent, familyIncome) {
  return lib.check46_scholarshipEligibility(marksPercent, familyIncome);
}

function runExample() {
  console.log('Q46 sample (88,400000):', solve(88,400000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Scholarship eligibility' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      88,
      400000
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
