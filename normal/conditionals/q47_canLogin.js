/**
 * Q47 - Login check
 *
 * Problem statement:
 * Verify whether provided `username` and `password` match stored credentials. Return true when
 * credentials match exactly, otherwise false.
 *
 * Input:
 * - `username`, `password`: credentials provided by user
 * - `storedUsername`, `storedPassword`: credentials stored in the system
 *
 * Output:
 * - Return or print `true` if `username === storedUsername` and `password === storedPassword`, otherwise `false`.
 *
 * Constraints & notes:
 * - Use strict equality and exact matching; no hashing is performed in these exercises.
 * - In real systems never store plaintext passwords—this is an educational example.
 *
 * Examples:
 * - Input: ["alice","pass","alice","pass"] => Output: true
 * - Input: ["bob","x","bob","y"] => Output: false
 *
 * Edge cases:
 * - Case-sensitivity matters unless explicitly specified otherwise.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q47: Check if a user can login (username & password match)
const lib = require('../if_else/level3_real_world');

function solve(username, password, storedUsername, storedPassword) {
  return lib.check47_canLogin(username, password, storedUsername, storedPassword);
}

function runExample() {
  console.log('Q47 sample (alice/pass):', solve('alice','pass','alice','pass'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Login check' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "alice",
      "pass",
      "alice",
      "pass"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
