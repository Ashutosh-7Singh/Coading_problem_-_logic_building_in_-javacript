/**
 * Q43 - Calculate bonus based on years
 *
 * Problem statement:
 * Calculate the bonus payable to an employee based on basic salary and years of service.
 * The helper in `level3_real_world` contains the exact slab logic used by tests.
 *
 * Input:
 * - `basic` (number): basic salary.
 * - `years` (integer): years of service.
 *
 * Output:
 * - Return or print the bonus amount as a number.
 *
 * Constraints & notes:
 * - Typical logic: longer service yields higher bonus percentage of basic salary.
 * - Negative or non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [40000, 6] => Output: 24000 (example using project slab rules)
 *
 * Edge cases:
 * - Very long service years or fractional years should be handled correctly per project rules.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q43: Calculate bonus based on years of service
const lib = require('../if_else/level3_real_world');

function solve(basic, years) {
  return lib.check43_bonus(basic, years);
}

function runExample() {
  console.log('Q43 sample (basic=40000, years=6):', solve(40000,6));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate bonus based on years' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      40000,
      6
    ],
    "expected": 24000
  }
];
module.exports.tests = __tests;
