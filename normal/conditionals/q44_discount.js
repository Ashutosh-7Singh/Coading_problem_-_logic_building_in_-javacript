/**
 * Q44 - Calculate discount
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 3000 => Output: 300
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
