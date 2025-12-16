/**
 * Q58 - Profit or Loss calculation
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [100,150] => Output: {"type":"Profit","amount":50}
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
