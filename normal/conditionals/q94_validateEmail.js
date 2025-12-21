/**
 * Q94 - Basic email validation
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "user@example.com" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q94: Validate email format (basic)
const lib = require('../if_else/level5_challenging_conditional');

function solve(email) {
  return lib.check94_validateEmail(email);
}

function runExample() {
  console.log('Q94 sample (user@example.com):', solve('user@example.com'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Basic email validation' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "user@example.com"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
