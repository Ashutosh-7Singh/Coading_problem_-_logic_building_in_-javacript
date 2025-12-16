/**
 * Q48 - Divisible by 2, 4, and 8
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 64 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q48: Check if a number is divisible by 2, 4, and 8
const lib = require('../if_else/level3_real_world');

function solve(n) {
  return lib.check48_divBy2And4And8(n);
}

function runExample() {
  console.log('Q48 sample (64):', solve(64));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Divisible by 2, 4, and 8' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      64
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
