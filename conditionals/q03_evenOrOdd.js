/**
 * Q03 - Check if a number is even or odd
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not an integer"
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