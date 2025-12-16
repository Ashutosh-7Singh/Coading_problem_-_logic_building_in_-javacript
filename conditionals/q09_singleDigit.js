/**
 * Q09 - Check single-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q9: Check if a number is a single-digit number
// Implement `solve(n)` to return: true if single-digit (including negative single digits), else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check9_singleDigit(n);
}

function runExample() {
  const sample = -7;
  console.log('Q9 - Single-digit - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check single-digit number' };


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
