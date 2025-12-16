/**
 * Q83 - Neon number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 9 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q83: Check if a number is neon number
const lib = require('../if_else/level5_challenging_conditional');

function solve(n) {
  return lib.check83_neonNumber(n);
}

function runExample() {
  console.log('Q83 sample (9):', solve(9));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Neon number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      9
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
