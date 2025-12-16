/**
 * Q71 - Harshad number check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 18 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q71: Check if a number is Harshad number
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check71_harshad(n);
}

function runExample() {
  console.log('Q71 sample (18):', solve(18));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Harshad number check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      18
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
