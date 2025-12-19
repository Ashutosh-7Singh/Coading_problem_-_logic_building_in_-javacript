/**
 * Q17 - Check multiple of 10
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q17: Check if a number is a multiple of 10
// Implement `solve(n)` to return: true if n % 10 === 0, else false.

const lib = require('../if_else/if_else_examples');

function multipleOf10(num){
  if(typeof num !== 'number') return false
   if (num % 10 ===0 ){
    console.log("divisible to 10")
   }else console.log("Not divisible by 10")
}

multipleOf10(11)