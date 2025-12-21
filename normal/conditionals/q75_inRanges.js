/**
 * Q75 - Check number in multiple ranges
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [25,[[1,10],[20,30]]] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q75: Check if a number is within multiple ranges
const lib = require('../if_else/level4_intermediate_logic');

function solve(n, ranges) {
  return lib.check75_inRanges(n, ranges);
}

function runExample() {
  console.log('Q75 sample (25) ranges [[1,10],[20,30]]:', solve(25, [[1,10],[20,30]]));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check number in multiple ranges' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      25,
      [
        [
          1,
          10
        ],
        [
          20,
          30
        ]
      ]
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
