/**
 * Q42 - Calculate total salary
 *
 * Problem statement:
 * Compute the total salary given a basic salary and percentage values for HRA and DA.
 * Typically: total = basic + (basic * hraPercent/100) + (basic * daPercent/100).
 *
 * Input:
 * - `basic` (number): basic salary amount.
 * - `hraPercent` (number, optional): HRA percentage (default may be provided by helper).
 * - `daPercent` (number, optional): DA percentage.
 *
 * Output:
 * - Return or print the computed total salary as a number.
 *
 * Constraints & notes:
 * - Percent values are expected as numbers (e.g., 10 for 10%).
 * - This file uses helper logic in `level3_real_world` for consistent behavior across tests.
 *
 * Examples:
 * - Input: basic=50000 => Output: 65000 (example using sample HRA/DA in project)
 *
 * Edge cases:
 * - Zero or negative basic salaries should be validated; tests typically pass valid values.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q42: Calculate total salary based on basic + HRA + DA
const lib = require('../if_else/level3_real_world');

// function solve(basic, hraPercent, daPercent) {
//   return lib.check42_totalSalary(basic, hraPercent, daPercent);
// }

// function runExample() {
//   console.log('Q42 sample (basic=50000):', solve(50000));
//   // Custom example with HRA=20% and DA=10%
//   console.log('Q42 custom (basic=50000, hra=20, da=10):', solve(50000, 20, 10));
// }

// if (require.main === module) runExample();

// module.exports = { solve, runExample, description: 'Calculate total salary' };


// // AUTO-GENERATED-TESTS
// const __tests = [
//   {
//     "input": [
//       50000
//     ],
//     "expected": 65000
//   }
// ];
// module.exports.tests = __tests;

function totalSalary(basic, hraPercent, daPercent) {
  // 1. Validate basic salary
  if (typeof basic !== "number" || basic <= 0) {
    return "pleaes Enter Valid Salary";
  }

  // 2. Default HRA & DA if not provided
  if (typeof hraPercent !== "number") {
    hraPercent = 20; // default HRA
  }
  if (typeof daPercent !== "number") {
    daPercent = 10; // default DA
  }

  // 3. Calculate HRA & DA
  let hraAmount = (basic * hraPercent) / 100;
  let daAmount = (basic * daPercent) / 100;

  // 4. Total salary
  let total = basic + hraAmount + daAmount;

  return (total);
}

console.log(totalSalary(50000))

