/**
 * Q16 - Check if two numbers are equal
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "a, b" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q16: Check if two numbers are equal
// Implement `solve(a, b)` to return: true if equal, else false.

const lib = require('../if_else/if_else_examples');

function solve(a, b) {
  return lib.check16_twoNumbersEqual(a, b);
}

function runExample() {
  const a = 10, b = 10;
  console.log('Q16 - Two numbers equal - sample:', a, b, '=>', solve(a, b));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check if two numbers are equal' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "a, b"
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
