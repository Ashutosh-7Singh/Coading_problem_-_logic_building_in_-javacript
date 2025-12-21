/**
 * Q46 - Scholarship eligibility
 *
 * Problem statement:
 * Determine whether a student is eligible for a scholarship based on academic marks and
 * family income thresholds. The specific eligibility rules (marks cutoff and income limit)
 * are applied by the `level3_real_world` helper used by tests.
 *
 * Input:
 * - `marksPercent` (number): student's percentage marks (0-100 expected).
 * - `familyIncome` (number): annual family income.
 *
 * Output:
 * - Return or print `true` if the student meets the scholarship eligibility criteria, otherwise `false`.
 *
 * Constraints & notes:
 * - Typical rule: marks above a cutoff and family income below a threshold qualify.
 * - Non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [88, 400000] => Output: true (example using project criteria)
 *
 * Edge cases:
 * - Boundary values for marks and income should be treated according to the policy (>= or > based on spec).
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
