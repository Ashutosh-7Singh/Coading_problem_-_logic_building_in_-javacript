/**
 * Q04 - Check voting eligibility (age >= 18)
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not eligible to vote"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q4: Check if a person is eligible to vote (age ≥ 18)
// Implement `solve(age)` to return: 'Eligible to vote' or 'Not eligible to vote'.



function eligibleToVote(age){
  if(typeof age !=='number') {
    console.log("Not a Valid Age")
  }

  if(age>=18){
    console.log("Eligible for vote")
  }else{
    console.log("Not Eligible")
  }
}

eligibleToVote(177);

// const lib = require('../if_else/if_else_examples');

// function solve(age) {
//   return lib.check4_eligibleToVote(age);
// }

// function runExample() {
//   const sample = 20;
//   console.log('Q4 - Eligible to vote - sample:', sample, '=>', solve(sample));
// }

// if (require.main === module) runExample();

// module.exports = { solve, runExample, description: 'Check voting eligibility (age >= 18)' };


// // AUTO-GENERATED-TESTS
// const __tests = [
//   {
//     "input": [
//       "sample"
//     ],
//     "expected": "Not eligible to vote"
//   }
// ];
// module.exports.tests = __tests;


