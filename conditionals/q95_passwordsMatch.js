/**
 * Q95 - Passwords match check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: ["Abc@123","Abc@123"] => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q95: Check if password and confirm password match
const lib = require('../if_else/level5_challenging_conditional');

function solve(pw, confirm) {
  return lib.check95_passwordsMatch(pw, confirm);
}

function runExample() {
  console.log('Q95 sample (Abc@123, Abc@123):', solve('Abc@123', 'Abc@123'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Passwords match check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "Abc@123",
      "Abc@123"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
