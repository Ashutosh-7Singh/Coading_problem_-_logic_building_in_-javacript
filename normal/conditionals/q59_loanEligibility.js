/**
 * Q59 - Loan eligibility
 *
 * Problem statement:
 * Determine whether a person is eligible for a loan based on criteria such as age and monthly income.
 * The helper `level3_real_world` implements the specific eligibility rules used by tests.
 *
 * Input:
 * - `age` (integer), `monthlyIncome` (number).
 *
 * Output:
 * - Return or print `true` if the person meets eligibility criteria, otherwise `false`.
 *
 * Constraints & notes:
 * - Typical conditions: minimum age and minimum monthly income thresholds. Use helper for exact rules.
 *
 * Examples:
 * - Input: [30, 30000] => Output: true (example using project rules)
 *
 * Edge cases:
 * - Edge values near the thresholds should match helper behavior precisely.
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
