/**
 * Q100 - Transaction validity check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [500,200] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q100: Check if a transaction is valid based on balance and amount
const lib = require('../if_else/level5_challenging_conditional');

function solve(balance, amount) {
  return lib.check100_transactionValid(balance, amount);
}

function runExample() {
  console.log('Q100 sample (balance=500, amt=200):', solve(500,200));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Transaction validity check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      500,
      200
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
