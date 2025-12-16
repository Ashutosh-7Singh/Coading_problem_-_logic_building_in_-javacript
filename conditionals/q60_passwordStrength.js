/**
 * Q60 - Password strength validation
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "Abc@1234" => Output: {"lengthOk":true,"hasUpper":true,"hasLower":true,"hasDigit":true,"hasSpecial":true,"strong":true}
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q60: Validate password strength (basic conditions)
const lib = require('../if_else/level3_real_world');

function solve(pw) {
  return lib.check60_passwordStrength(pw);
}

function runExample() {
  console.log('Q60 sample ("Abc@1234"):', solve('Abc@1234'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Password strength validation' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "Abc@1234"
    ],
    "expected": {
      "lengthOk": true,
      "hasUpper": true,
      "hasLower": true,
      "hasDigit": true,
      "hasSpecial": true,
      "strong": true
    }
  }
];
module.exports.tests = __tests;
