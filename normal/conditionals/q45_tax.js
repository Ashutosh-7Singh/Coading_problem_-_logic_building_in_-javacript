/**
 * Q45 - Calculate income tax
 *
 * Problem statement:
 * You are a tax consultant. Given a person's annual taxable income, calculate the total income tax payable based on the following tax slabs:
 *   - No tax for income up to 250,000.
 *   - 5% tax on the portion of income between 250,001 and 500,000.
 *   - 20% tax on the portion of income between 500,001 and 1,000,000.
 *   - 30% tax on the portion of income above 1,000,000.
 * Write a function to compute the total tax for a given income.
 *
 * Input:
 * - An integer `income` (0 <= income <= 10^9): the annual taxable income.

 * Output:
 * - An integer: the total tax payable for the given income.

 * Constraints:
 * - Negative incomes are invalid and should return 0 tax.

 * Example 1:
 * Input: 1200000
 * Output: 172500
 * Explanation: Tax is 0 for first 250,000, 12,500 for next 250,000 (5%), 100,000 for next 500,000 (20%), and 60,000 for remaining 200,000 (30%).

 * Example 2:
 * Input: 400000
 * Output: 7,500
 * Explanation: Tax is 0 for first 250,000, 7,500 for next 150,000 (5%).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q45: Calculate tax based on income slabs
// const lib = require('../if_else/level3_real_world');

// function solve(income) {
//   return lib.check45_tax(income);
// }

// function runExample() {
//   console.log('Q45 sample (1200000):', solve(1200000));
// }

// if (require.main === module) runExample();

// module.exports = { solve, runExample, description: 'Calculate income tax' };


// // AUTO-GENERATED-TESTS
// const __tests = [
//   {
//     "input": [
//       1200000
//     ],
//     "expected": 172500
//   }
// ];
// module.exports.tests = __tests;



function calculateTax(income){
if(typeof income !== 'number'){
  console.log("Pleae Enter a valid Salary")
  return 0 
}
while(0 <= income <= 10^9){
  
}
}