/**
 * Q66 - Determine quadrant
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [-3,4] => Output: "Second quadrant"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q66: Check which quadrant a point lies in
const lib = require('../if_else/level4_intermediate_logic');

function solve(x, y) {
  return lib.check66_quadrant(x, y);
}

function runExample() {
  console.log('Q66 sample (-3,4):', solve(-3,4));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Determine quadrant' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      -3,
      4
    ],
    "expected": "Second quadrant"
  }
];
module.exports.tests = __tests;
