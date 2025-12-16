/**
 * Q32 - Check char type: alphabet/digit/special
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "a" => Output: "Alphabet"
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
