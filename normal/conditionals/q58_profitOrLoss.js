/**
 * Q58 - Profit or Loss calculation
 *
 * Problem statement:
 * Given the cost price and selling price of an item, determine whether a transaction
 * yielded a profit or a loss and calculate the corresponding amount.
 *
 * Input:
 * - `costPrice` (number), `sellingPrice` (number).
 *
 * Output:
 * - Return or print an object (or structured output) indicating type ('Profit' or 'Loss') and amount.
 *   Example: { type: 'Profit', amount: 50 }.
 *
 * Constraints & notes:
 * - Equal prices result in neither profit nor loss; tests might represent that as amount 0.
 *
 * Examples:
 * - Input: [100,150] => Output: { type: 'Profit', amount: 50 }
 * - Input: [200,150] => Output: { type: 'Loss', amount: 50 }
 *
 * Edge cases:
 * - Negative or zero prices should be validated; tests typically use positive values.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q58: Find profit or loss
const lib = require('../if_else/level3_real_world');

function solve(costPrice, sellingPrice) {
  return lib.check58_profitOrLoss(costPrice, sellingPrice);
}

function runExample() {
  console.log('Q58 sample (100,150):', solve(100,150));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Profit or Loss calculation' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      100,
      150
    ],
    "expected": {
      "type": "Profit",
      "amount": 50
    }
  }
];
module.exports.tests = __tests;
