/**
 * Q02 - Check if a number is zero or not
 *
 * Problem statement:
 * Determine whether a given numeric input `n` is exactly zero or not.
 *
 * Input:
 * - A single value `n` (typically a number).
 *
 * Output:
 * - Return or print the string 'Zero' if `n === 0`, otherwise 'Not zero'.
 * - Non-numeric inputs may be treated as invalid and handled accordingly.
 *
 * Constraints & notes:
 * - Use strict equality for zero check to avoid false positives for falsy values.
 * - Floating point zeros (0.0) should be considered zero.
 *
 * Examples:
 * - Input: 0   => Output: 'Zero'
 * - Input: 5   => Output: 'Not zero'
 * - Input: -0  => Output: 'Zero'
 *
 * Edge cases:
 * - Non-numeric inputs should be validated and handled (print message or return an error).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q2: Check if a number is zero or not
// Implement `solve(n)` to return: 'Zero' or 'Not zero'.

// const lib = require('../if_else/if_else_examples');

// function solve(n) {
//   return lib.check2_zeroOrNot(n);
// }

// function runExample() {
//   const sample = 0;
//   console.log('Q2 - Zero or not - sample:', sample, '=>', solve(sample));
// }

// if (require.main === module) runExample();

// module.exports = { solve, runExample, description: 'Check if a number is zero or not' };


// // AUTO-GENERATED-TESTS
// const __tests = [
//   {
//     "input": [
//       "sample"
//     ],
//     "expected": "Not zero"
//   }
// ];
// module.exports.tests = __tests;




function checkNumber(n){
  if(typeof n!== 'number'){
    console.log('Input is not a number');
    return;
  }
  if(n===0){
    console.log("The Number is Zero ")
  }else{
    console.log("The Number is Not Zero ")
  }
}

checkNumber(0);