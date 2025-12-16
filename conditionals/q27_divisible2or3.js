/**
 * Q27 - Check divisible by 2, 3, or both
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 12 => Output: "Divisible by both 2 and 3"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q27: Check if a number is divisible by 2, 3, or both
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check27_divisible2or3(n);
}

function runExample() {
  console.log('Q27 sample (12):', solve(12));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check divisible by 2, 3, or both' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      12
    ],
    "expected": "Divisible by both 2 and 3"
  }
];
module.exports.tests = __tests;
