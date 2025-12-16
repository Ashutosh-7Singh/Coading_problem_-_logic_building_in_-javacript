/**
 * Q08 - Check uppercase or lowercase
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Input must be a single character"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q8: Check if a character is uppercase or lowercase
// Implement `solve(ch)` to return: 'Uppercase', 'Lowercase', or error message for invalid input.

const lib = require('../if_else/if_else_examples');

function solve(ch) {
  return lib.check8_upperOrLower(ch);
}

function runExample() {
  const sample = 'G';
  console.log('Q8 - Uppercase or Lowercase - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check uppercase or lowercase' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Input must be a single character"
  }
];
module.exports.tests = __tests;
