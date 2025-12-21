/**
 * Q60 - Password strength validation
 *
 * Problem statement:
 * Check password strength against several criteria: minimum length, presence of uppercase
 * letters, lowercase letters, digits, and special characters. Produce a summary object
 * indicating which criteria are met and whether the password is considered strong.
 *
 * Input:
 * - A single string `pw` representing the password.
 *
 * Output:
 * - Return or print an object summarizing criteria, e.g.:
 *   { lengthOk: true, hasUpper: true, hasLower: true, hasDigit: true, hasSpecial: true, strong: true }
 *
 * Constraints & notes:
 * - Minimum length and exact rules for 'strong' are defined by the helper in `level3_real_world`.
 * - Implementations typically require at least one uppercase, one lowercase, one digit, one special character, and minimum length.
 *
 * Examples:
 * - Input: 'Abc@1234' => Output: { lengthOk: true, hasUpper: true, hasLower: true, hasDigit: true, hasSpecial: true, strong: true }
 *
 * Edge cases:
 * - Empty or very short passwords should return all false criteria.
 * - Passwords with unicode characters may behave differently depending on implementation.
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
