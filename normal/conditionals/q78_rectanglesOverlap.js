/**
 * Q78 - Rectangles overlap check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [{"x":0,"y":0,"w":10,"h":10},{"x":5,"y":5,"w":10,"h":10}] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q78: Check if two rectangles overlap
const lib = require('../if_else/level4_intermediate_logic');

function solve(r1, r2) {
  return lib.check78_rectanglesOverlap(r1, r2);
}

function runExample() {
  console.log('Q78 sample overlap:', solve({x:0,y:0,w:10,h:10},{x:5,y:5,w:10,h:10}));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Rectangles overlap check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      {
        "x": 0,
        "y": 0,
        "w": 10,
        "h": 10
      },
      {
        "x": 5,
        "y": 5,
        "w": 10,
        "h": 10
      }
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
