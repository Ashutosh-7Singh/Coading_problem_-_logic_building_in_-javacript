/**
 * Q76 - Ascending order check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [1,2,3] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q76: Check if three numbers are in ascending order
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, c) {
  return lib.check76_ascending(a, b, c);
}

function runExample() {
  console.log('Q76 sample (1,2,3):', solve(1,2,3));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Ascending order check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      1,
      2,
      3
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
