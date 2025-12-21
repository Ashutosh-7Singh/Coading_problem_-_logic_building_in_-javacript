/**
 * Q64 - Triangle type by sides
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [3,4,5] => Output: "Scalene"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q64: Triangle type using sides
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, c) {
  return lib.check64_triangleTypeBySides(a, b, c);
}

function runExample() {
  console.log('Q64 sample (3,4,5):', solve(3,4,5));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Triangle type by sides' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      3,
      4,
      5
    ],
    "expected": "Scalene"
  }
];
module.exports.tests = __tests;
