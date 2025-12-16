/**
 * Q30 - Senior citizen eligibility (age >= 60)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 65 => Output: "Eligible for senior discount"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q30: Check senior citizen eligibility (age ≥ 60)
const lib = require('../if_else/level2_basic_logic');

function solve(age) {
  return lib.check30_seniorCitizen(age);
}

function runExample() {
  console.log('Q30 sample (65):', solve(65));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Senior citizen eligibility (age >= 60)' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      65
    ],
    "expected": "Eligible for senior discount"
  }
];
module.exports.tests = __tests;
