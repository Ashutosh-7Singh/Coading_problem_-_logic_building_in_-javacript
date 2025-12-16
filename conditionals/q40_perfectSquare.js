/**
 * Q40 - Check perfect square
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 49 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q40: Check if a number is a perfect square
const lib = require('../if_else/level2_basic_logic');

function solve(n) {
  return lib.check40_perfectSquare(n);
}

function runExample() {
  console.log('Q40 sample (49):', solve(49));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check perfect square' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      49
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
