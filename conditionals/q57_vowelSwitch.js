/**
 * Q57 - Check vowel using switch
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "E" => Output: true
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q57: Check if a character is a vowel using switch
const lib = require('../if_else/level3_real_world');

function solve(ch) {
  return lib.check57_vowelSwitch(ch);
}

function runExample() {
  console.log('Q57 sample (E):', solve('E'));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check vowel using switch' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "E"
    ],
    "expected": true
  }
];
module.exports.tests = __tests;
