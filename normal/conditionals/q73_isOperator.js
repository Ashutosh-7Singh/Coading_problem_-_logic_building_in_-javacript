/**
 * Q73 - Operator validity check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "+" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q73: Check if a character is a valid operator
const lib = require('../if_else/level4_intermediate_logic');

function solve(ch) {
  return lib.check73_isOperator(ch);
}

function runExample() {
  console.log('Q73 sample (+):', solve('+'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Operator validity check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "+"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
