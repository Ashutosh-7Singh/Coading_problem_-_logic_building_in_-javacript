/**
 * Q25 - Check triangle validity (sum=180)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [60,60,60] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q25: Check if a triangle is valid (sum of angles = 180)
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check25_triangleValid(a, b, c);
}

function runExample() {
  console.log('Q25 sample (60,60,60):', solve(60,60,60));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check triangle validity (sum=180)' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      60,
      60,
      60
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
