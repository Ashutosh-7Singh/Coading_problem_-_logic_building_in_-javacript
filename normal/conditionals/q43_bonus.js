/**
 * Q43 - Calculate bonus based on years
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [40000,6] => Output: 24000
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q43: Calculate bonus based on years of service
const lib = require('../if_else/level3_real_world');

function solve(basic, years) {
  return lib.check43_bonus(basic, years);
}

function runExample() {
  console.log('Q43 sample (basic=40000, years=6):', solve(40000,6));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate bonus based on years' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      40000,
      6
    ],
    "expected": 24000
  }
];
module.exports.tests = __tests;
