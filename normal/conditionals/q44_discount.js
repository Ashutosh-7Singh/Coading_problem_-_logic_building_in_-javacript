/**
 * Q44 - Calculate discount
 *
 * Problem statement:
 * Given a purchase amount, compute the discount amount according to the store's discount slabs
 * (e.g., percentage discount over certain thresholds). The actual slab rules are implemented in
 * the project's helper `level3_real_world`.
 *
 * Input:
 * - A single numeric `amount` representing the shopping total.
 *
 * Output:
 * - Return or print the discount amount (number).
 *
 * Constraints & notes:
 * - Use the helper logic to match test expectations.
 * - Non-numeric or negative amounts should be validated.
 *
 * Examples:
 * - Input: 3000 => Output: 300 (example using project slabs)
 *
 * Edge cases:
 * - Small amounts below slab thresholds may get zero discount.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q44: Calculate discount based on shopping amount
const lib = require('../if_else/level3_real_world');

function solve(amount) {
  return lib.check44_discount(amount);
}

function runExample() {
  console.log('Q44 sample (3000):', solve(3000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate discount' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3000
    ],
    "expected": 300
  }
];
module.exports.tests = __tests;
