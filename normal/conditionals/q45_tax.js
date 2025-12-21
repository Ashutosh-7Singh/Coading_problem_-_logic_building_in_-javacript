/**
 * Q45 - Calculate income tax
 *
 * Problem statement:
 * Compute the income tax payable for a given taxable income using specified tax slabs and rates.
 * The exact slab and rate policy is implemented in `level3_real_world` helper used by tests.
 *
 * Input:
 * - A single numeric value `income` representing the taxable income.
 *
 * Output:
 * - Return or print the tax amount as a number.
 *
 * Constraints & notes:
 * - Use the project's slab logic to match expected outputs in tests.
 * - Negative incomes are invalid and should be handled as per test conventions.
 *
 * Examples:
 * - Input: 1200000 => Output: 172500 (example using helper slabs)
 *
 * Edge cases:
 * - Very large incomes should compute tax correctly according to slab progression.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q45: Calculate tax based on income slabs
const lib = require('../if_else/level3_real_world');

function solve(income) {
  return lib.check45_tax(income);
}

function runExample() {
  console.log('Q45 sample (1200000):', solve(1200000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate income tax' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      1200000
    ],
    "expected": 172500
  }
];
module.exports.tests = __tests;
