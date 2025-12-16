/**
 * Q19 - Check between 1 and 50
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q19: Check if a number lies between 1 and 50
// Implement `solve(n)` to return: true if 1 <= n <= 50, else false.

const lib = require('../if_else/if_else_examples');

function solve(n) {
  return lib.check19_between1and50(n);
}

function runExample() {
  const sample = 25;
  console.log('Q19 - Between 1 and 50 - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check between 1 and 50' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": false
  }
];
module.exports.tests = __tests;
