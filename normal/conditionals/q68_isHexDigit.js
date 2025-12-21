/**
 * Q68 - Hexadecimal digit check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "F" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q68: Check if a character is a valid hexadecimal digit
const lib = require('../if_else/level4_intermediate_logic');

function solve(ch) {
  return lib.check68_isHexDigit(ch);
}

function runExample() {
  console.log('Q68 sample (F):', solve('F'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Hexadecimal digit check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "F"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
