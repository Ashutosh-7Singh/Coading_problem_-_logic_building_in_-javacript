/**
 * Q39 - Check Pythagorean triplet
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [3,4,5] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q39: Check if three numbers form a Pythagorean triplet
const lib = require('../if_else/level2_basic_logic');

function solve(a, b, c) {
  return lib.check39_pythagoreanTriplet(a, b, c);
}

function runExample() {
  console.log('Q39 sample (3,4,5):', solve(3,4,5));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check Pythagorean triplet' };


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
