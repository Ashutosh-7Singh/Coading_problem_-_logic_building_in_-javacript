/**
 * Q92 - Customer premium eligibility
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [12000,2] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q92: Check if a customer is eligible for premium membership
const lib = require('../if_else/level5_challenging_conditional');

function solve(totalSpent, years) {
  return lib.check92_customerPremium(totalSpent, years);
}

function runExample() {
  console.log('Q92 sample (12000,2):', solve(12000,2));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Customer premium eligibility' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      12000,
      2
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
