/**
 * Q10 - Check two-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q10: Check if a number is a two-digit number
// Implement `solve(n)` to return: true if two-digit (including negative two-digit), else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check10_twoDigit(n);
}

function runExample() {
  const sample = 45;
  console.log('Q10 - Two-digit - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check two-digit number' };


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
