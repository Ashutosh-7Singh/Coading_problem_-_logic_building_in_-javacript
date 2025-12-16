/**
 * Q18 - Check negative/zero/positive
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Positive"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q18: Check if a number is negative, zero, or positive
// Implement `solve(n)` to return: 'Negative', 'Zero', or 'Positive'.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check18_negativeZeroPositive(n);
}

function runExample() {
  const sample = -1;
  console.log('Q18 - Negative/Zero/Positive - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check negative/zero/positive' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Positive"
  }
];
module.exports.tests = __tests;
