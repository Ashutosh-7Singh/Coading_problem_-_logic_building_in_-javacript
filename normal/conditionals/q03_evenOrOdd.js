/**
 * Q03 - Check if a number is even or odd
 *
 * Problem statement:
 * Determine whether an input `n` is even or odd. If `n` is not an integer, handle accordingly
 * (many implementations print a message indicating the input is not an integer).
 *
 * Input:
 * - A single value `n` (usually an integer).
 *
 * Output:
 * - Return or print 'Even' if `n` is an even integer, 'Odd' if `n` is an odd integer.
 * - For non-integer or non-numeric inputs, return/print a helpful message (e.g., 'Not an integer').
 *
 * Constraints & notes:
 * - Use integer checks (Number.isInteger) when available.
 * - Negative integers follow the same parity rules.
 *
 * Examples:
 * - Input: 4   => Output: 'Even'
 * - Input: 7   => Output: 'Odd'
 * - Input: 3.5 => Output: 'Not an integer'
 *
 * Edge cases:
 * - Very large integers should still be classified correctly.
 * - Non-numeric values should be validated by the caller.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q3: Check if a number is even or odd
// Implement `solve(n)` to return: 'Even' or 'Odd' (or a helpful message for non-integers).

// const lib = require('../if_else/if_else_examples');

// function solve(n) {
//   return lib.check3_evenOrOdd(n);
// }

// function runExample() {
//   const sample = 7;
//   console.log('Q3 - Even or Odd - sample:', sample, '=>', solve(sample));
// }

// if (require.main === module) runExample();

// module.exports = { solve, runExample, description: 'Check if a number is even or odd' };


// // AUTO-GENERATED-TESTS
// const __tests = [
//   {
//     "input": [
//       "sample"
//     ],
//     "expected": "Not an integer"
//   }
// ]
// module.exports.tests = __tests;


function evenOdd(num){
  if( typeof num!=='number' || !Number.isInteger(num)){
    console.log( "Not an integer or not a number ");
    return;
  }
  if(num%2===0){
    console.log("Even");
  }else{
    console.log("Odd");
  }
}

evenOdd(7);