/**
 * Q63 - Validate triangle sides
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [3,4,5] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q63: Check if three sides form a valid triangle
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, c) {
  return lib.check63_validTriangleSides(a, b, c);
}

function runExample() {
  console.log('Q63 sample (3,4,5):', solve(3,4,5));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Validate triangle sides' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3,
      4,
      5
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
