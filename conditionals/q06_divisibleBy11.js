/**
 * Q06 - Check divisible by 11
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not divisible by 11"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q6: Check if a number is divisible by 11
// Implement `solve(n)` to return: 'Divisible by 11' or 'Not divisible by 11'.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check6_divisibleBy11(n);
}

function runExample() {
  const sample = 33;
  console.log('Q6 - Divisible by 11 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check divisible by 11' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Not divisible by 11"
  }
];
module.exports.tests = __tests;
