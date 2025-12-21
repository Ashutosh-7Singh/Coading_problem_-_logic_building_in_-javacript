/**
 * Q55 - Check century year
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 2000 => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q55: Check if a year is a century year
const lib = require('../if_else/level3_real_world');

function solve(year) {
  return lib.check55_centuryYear(year);
}

function runExample() {
  console.log('Q55 sample (2000):', solve(2000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check century year' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      2000
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
