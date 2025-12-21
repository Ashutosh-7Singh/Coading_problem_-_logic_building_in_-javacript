/**
 * Q41 - Calculate electricity bill
 *
 * Problem statement:
 * Calculate an electricity bill for a given number of units consumed using tiered rates
 * and any fixed charges or surcharges defined by the problem.
 *
 * Input:
 * - A single numeric value `units` (non-negative integer) representing energy units consumed.
 *
 * Output:
 * - Return or print the total bill amount as a number (rounded according to the project's rules).
 *
 * Constraints & notes:
 * - Use the tariff slabs provided by the exercise's implementation — tests call into
 *   a helper in `level3_real_world` which implements the actual slab logic.
 * - Non-numeric or negative inputs should be validated and handled accordingly.
 *
 * Examples:
 * - Input: 350 => Output: 320 (example using project slab rules)
 *
 * Edge cases:
 * - Zero units should result in zero or minimal fixed charge depending on implementation.
 * - Very large unit values should still calculate correctly using the slab logic.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q41: Calculate electricity bill based on units consumed
const lib = require('../if_else/level3_real_world');

function solve(units) {
  return lib.check41_electricityBill(units);
}

function runExample() {
  console.log('Q41 sample (350):', solve(350));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate electricity bill' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      350
    ],
    "expected": 320
  }
];
module.exports.tests = __tests;
