/**
 * Q15 - Check if greater than 100
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q15: Check if a number is greater than 100
// Implement `solve(n)` to return: true if n > 100, else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check15_greaterThan100(n);
}

function runExample() {
  const sample = 150;
  console.log('Q15 - Greater than 100 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if greater than 100' };


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
