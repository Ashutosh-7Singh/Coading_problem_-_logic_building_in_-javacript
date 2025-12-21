/**
 * Q67 - Quadratic roots
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [1,-3,2] => Output: {"type":"Real and distinct","roots":[2,1]}
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q67: Find roots of a quadratic equation
const lib = require('../if_else/level4_intermediate_logic');

function solve(a, b, c) {
  return lib.check67_quadraticRoots(a, b, c);
}

function runExample() {
  console.log('Q67 sample (1,-3,2):', solve(1,-3,2));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Quadratic roots' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      1,
      -3,
      2
    ],
    "expected": {
      "type": "Real and distinct",
      "roots": [
        2,
        1
      ]
    }
  }
];
module.exports.tests = __tests;
