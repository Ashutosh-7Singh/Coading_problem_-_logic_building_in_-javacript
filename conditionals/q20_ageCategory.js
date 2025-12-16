/**
 * Q20 - Check age category
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Invalid age"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q20: Check if a person is a child, teenager, or adult
// Implement `solve(age)` to return: 'Child', 'Teenager', or 'Adult' (and handle invalid ages).

const lib = require('../if_else/if_else_examples');

function solve(age) {
  return lib.check20_ageCategory(age);
}

function runExample() {
  const sample = 15;
  console.log('Q20 - Age category - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check age category' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Invalid age"
  }
];
module.exports.tests = __tests;
