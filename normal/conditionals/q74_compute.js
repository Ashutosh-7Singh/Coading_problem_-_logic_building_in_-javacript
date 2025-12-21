/**
 * Q74 - Compute based on operator
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [5,3,"^"] => Output: 125
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q74: Perform arithmetic operation based on operator
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, op) {
  return lib.check74_compute(a, b, op);
}

function runExample() {
  console.log('Q74 sample (5,3,^):', solve(5,3,'^'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Compute based on operator' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      5,
      3,
      "^"
    ],
    "expected": 125
  }
];
module.exports.tests = __tests;
