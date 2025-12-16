/**
 * Q13 - Check divisible by 3 and 7
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q13: Check if a number is divisible by both 3 and 7
// Implement `solve(n)` to return: true if divisible by both, else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check13_divisibleBy3And7(n);
}

function runExample() {
  const sample = 21;
  console.log('Q13 - Divisible by 3 and 7 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check divisible by 3 and 7' };


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
