/**
 * Q59 - Loan eligibility
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [30,30000] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q59: Check if a person is eligible for loan
const lib = require('../if_else/level3_real_world');

function solve(age, monthlyIncome) {
  return lib.check59_loanEligibility(age, monthlyIncome);
}

function runExample() {
  console.log('Q59 sample (30,30000):', solve(30,30000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Loan eligibility' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      30,
      30000
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
