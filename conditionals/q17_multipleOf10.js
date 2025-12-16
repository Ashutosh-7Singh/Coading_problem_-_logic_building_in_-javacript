/**
 * Q17 - Check multiple of 10
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q17: Check if a number is a multiple of 10
// Implement `solve(n)` to return: true if n % 10 === 0, else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check17_multipleOf10(n);
}

function runExample() {
  const sample = 120;
  console.log('Q17 - Multiple of 10 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check multiple of 10' };


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
