/**
 * Q65 - Check perfect cube
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 27 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q65: Check if a number is a perfect cube
const lib = require('../if_else/level4_intermediate_logic');

function solve(n) {
  return lib.check65_perfectCube(n);
}

function runExample() {
  console.log('Q65 sample (27):', solve(27));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check perfect cube' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      27
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
