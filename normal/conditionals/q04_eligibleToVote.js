/**
 * Q04 - Check voting eligibility (age >= 18)
 *
 * Problem statement:
 * Given a person's age, determine whether they are eligible to vote. A person is eligible
 * if their age is greater than or equal to 18.
 *
 * Input:
 * - A single numeric value `age` (non-negative integer expected).
 *
 * Output:
 * - Return or print 'Eligible to vote' when `age >= 18`, otherwise 'Not eligible to vote'.
 * - Negative ages or non-numeric input should be handled as invalid; typical behavior is to
 *   print a message and treat them as not eligible.
 *
 * Constraints & notes:
 * - Age is usually an integer; fractional ages may be floored depending on requirements.
 *
 * Examples:
 * - Input: 20  => Output: 'Eligible to vote'
 * - Input: 17  => Output: 'Not eligible to vote'
 * - Input: 18  => Output: 'Eligible to vote'
 *
 * Edge cases:
 * - Extremely large ages should still be classified as eligible.
 * - Non-numeric inputs should be validated by the caller.
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


