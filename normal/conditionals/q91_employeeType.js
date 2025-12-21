/**
 * Q91 - Employee type check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "permanent" => Output: "Permanent"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q91: Check if an employee is permanent or contract
const lib = require('../if_else/level5_challenging_conditional');

function solve(status) {
  return lib.check91_employeeType(status);
}

function runExample() {
  console.log('Q91 sample ("permanent"):', solve('permanent'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Employee type check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "permanent"
    ],
    "expected": "Permanent"
  }
];
module.exports.tests = __tests;
