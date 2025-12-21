/**
 * Q50 - Assign grade from percentage
 *
 * Problem statement:
 * Given a percentage score, assign a letter grade according to predefined thresholds
 * (e.g., A, B, C, D, F). The helper in `level3_real_world` implements the project's
 * exact grading thresholds used by tests.
 *
 * Input:
 * - A single numeric `percent` (0-100 expected).
 *
 * Output:
 * - Return or print a grade string such as 'A', 'B', 'C', etc.
 *
 * Constraints & notes:
 * - Exact cutoffs vary by project; rely on the helper for consistency with tests.
 *
 * Examples:
 * - Input: 76 => Output: 'B' (example based on project thresholds)
 *
 * Edge cases:
 * - Borderline percentages should follow the project's inclusive/exclusive rules (>= or >).
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
