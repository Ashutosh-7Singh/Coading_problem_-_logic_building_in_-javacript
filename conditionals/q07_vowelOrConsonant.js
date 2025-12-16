/**
 * Q07 - Check vowel or consonant
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Input must be a single character"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q7: Check if a character is a vowel or consonant
// Implement `solve(ch)` to return: 'Vowel', 'Consonant', or error message for invalid input.

const lib = require('../if_else/if_else_examples');

function solve(ch) {
  return lib.check7_vowelOrConsonant(ch);
}

function runExample() {
  const sample = 'a';
  console.log("Q7 - Vowel or Consonant - sample:", sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check vowel or consonant' };


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
