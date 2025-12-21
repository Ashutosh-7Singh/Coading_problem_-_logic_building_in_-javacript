/**
 * Q32 - Check char type: alphabet/digit/special
 *
 * Problem statement:
 * Given a single character, determine whether it is an alphabetic letter, a digit, or a special character.
 *
 * Input:
 * - A single-character string `ch`.
 *
 * Output:
 * - Return or print 'Alphabet' for letters, 'Digit' for numeric digits, and 'Special' for other characters.
 * - For invalid inputs (multi-character strings), print a helpful message.
 *
 * Constraints & notes:
 * - Treat uppercase and lowercase letters equally for the 'Alphabet' classification.
 *
 * Examples:
 * - Input: 'a' => Output: 'Alphabet'
 * - Input: '5' => Output: 'Digit'
 * - Input: '#' => Output: 'Special'
 *
 * Edge cases:
 * - Empty string or multi-character inputs should be rejected.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q32: Check if a character is an alphabet, digit, or special character
const lib = require('../if_else/level2_basic_logic');

function solve(ch) {
  return lib.check32_charType(ch);
}

function runExample() {
  console.log('Q32 sample (a):', solve('a'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check char type: alphabet/digit/special' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "a"
    ],
    "expected": "Alphabet"
  }
];
module.exports.tests = __tests;
