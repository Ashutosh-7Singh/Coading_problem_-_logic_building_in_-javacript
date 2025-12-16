/**
 * Q14 - Check temperature category
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Invalid temperature"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q14: Check if a temperature is hot (>30), moderate, or cold
// Implement `solve(temp)` to return: 'Hot', 'Moderate', 'Cold', or 'Invalid temperature'.

const lib = require('../if_else/if_else_examples');

function solve(temp) {
  return lib.check14_temperatureCategory(temp);
}

function runExample() {
  const sample = 35;
  console.log('Q14 - Temperature category - sample:', sample, '=>', solve(sample));
}

if (require.main === module) runExample();

module.exports = { solve, runExample, description: 'Check temperature category' };


// AUTO-GENERATED-TESTS
const __tests = [
  {
    "input": [
      "sample"
    ],
    "expected": "Invalid temperature"
  }
];
module.exports.tests = __tests;
