/**
 * Q98 - Number within dynamic range check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [15,10,20] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q98: Check if a number is within dynamic user-defined range
const lib = require('../if_else/level5_challenging_conditional');

function solve(n, low, high) {
  return lib.check98_inDynamicRange(n, low, high);
}

function runExample() {
  console.log('Q98 sample (15,10,20):', solve(15,10,20));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Number within dynamic range check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      15,
      10,
      20
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
