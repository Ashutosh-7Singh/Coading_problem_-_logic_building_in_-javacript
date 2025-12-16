/**
 * Q42 - Calculate total salary
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 50000 => Output: 65000
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q42: Calculate total salary based on basic + HRA + DA
const lib = require('../if_else/level3_real_world');

function solve(basic, hraPercent, daPercent) {
  return lib.check42_totalSalary(basic, hraPercent, daPercent);
}

function runExample() {
  console.log('Q42 sample (basic=50000):', solve(50000));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Calculate total salary' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      50000
    ],
    "expected": 65000
  }
];
module.exports.tests = __tests;
