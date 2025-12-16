/**
 * Q47 - Login check
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: ["alice","pass","alice","pass"] => Output: true
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
