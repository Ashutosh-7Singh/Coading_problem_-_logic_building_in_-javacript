/**
 * Q45 - Calculate income tax
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 1200000 => Output: 172500
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
