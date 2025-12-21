/**
 * Q77 - Descending order check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [3,2,1] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q77: Check if three numbers are in descending order
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, c) {
  return lib.check77_descending(a, b, c);
}

function runExample() {
  console.log('Q77 sample (3,2,1):', solve(3,2,1));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Descending order check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3,
      2,
      1
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
