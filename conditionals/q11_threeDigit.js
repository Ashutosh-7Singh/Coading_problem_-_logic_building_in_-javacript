/**
 * Q11 - Check three-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q11: Check if a number is a three-digit number
// Implement `solve(n)` to return: true if three-digit (including negative three-digit), else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check11_threeDigit(n);
}

function runExample() {
  const sample = 256;
  console.log('Q11 - Three-digit - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check three-digit number' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
