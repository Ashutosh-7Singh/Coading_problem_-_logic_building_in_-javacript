/**
 * Q18 - Check negative/zero/positive
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Positive"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q18: Check if a number is negative, zero, or positive
// Implement `solve(n)` to return: 'Negative', 'Zero', or 'Positive'.

const lib = require('../if_else/if_else_examples');
function negativeZeroPositive(num){
  if (typeof num !== 'number') return false

  if(num >0) {
    console.log("Positive")
  }else if(num < 0){
    console.log("Negative")
  }else{
    console.log("Zero")
  }
}

negativeZeroPositive(-9)