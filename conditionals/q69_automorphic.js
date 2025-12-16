/**
 * Q69 - Automorphic number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 25 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q69: Check if a number is automorphic (square ends with the number)
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check69_automorphic(n);
}

function runExample() {
  console.log('Q69 sample (25):', solve(25));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Automorphic number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      25
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
