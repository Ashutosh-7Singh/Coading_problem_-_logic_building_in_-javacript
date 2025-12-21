/**
 * Q57 - Check vowel using switch
 *
 * Problem statement:
 * Determine whether a given single character is a vowel (a,e,i,o,u) using a switch-case style
 * check (case-insensitive).
 *
 * Input:
 * - A single-character string `ch`.
 *
 * Output:
 * - Return or print `true` if `ch` is a vowel, otherwise `false`.
 *
 * Constraints & notes:
 * - Treat uppercase and lowercase letters equally.
 * - Non-letter inputs should be handled as invalid.
 *
 * Examples:
 * - Input: 'E' => Output: true
 * - Input: 'b' => Output: false
 *
 * Edge cases:
 * - Multi-character strings and empty strings should be validated.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q57: Check if a character is a vowel using switch
const lib = require('../if_else/level3_real_world');

function solve(ch) {
  return lib.check57_vowelSwitch(ch);
}

function runExample() {
  console.log('Q57 sample (E):', solve('E'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check vowel using switch' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "E"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
