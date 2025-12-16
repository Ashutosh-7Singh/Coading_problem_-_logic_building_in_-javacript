/**
 * Q26 - Triangle type: equilateral/isosceles/scalene
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [60,60,60] => Output: "Equilateral"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q26: Check triangle type: equilateral, isosceles, or scalene
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check26_triangleType(a, b, c);
}

function runExample() {
  console.log('Q26 sample (60,60,60):', solve(60,60,60));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Triangle type: equilateral/isosceles/scalene' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      60,
      60,
      60
    ],
    "expected": "Equilateral"
  }
];
module.exports.tests = __tests;
