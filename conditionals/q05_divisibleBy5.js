/**
 * Q05 - Check divisible by 5
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not divisible by 5"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q5: Check if a number is divisible by 5
// Implement `solve(n)` to return: 'Divisible by 5' or 'Not divisible by 5'.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check5_divisibleBy5(n);
}

function runExample() {
  const sample = 25;
  console.log('Q5 - Divisible by 5 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check divisible by 5' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Not divisible by 5"
  }
];
module.exports.tests = __tests;
