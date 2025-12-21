/**
 * Q41 - Calculate electricity bill
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 350 => Output: 320
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
