/**
 * Q15 - Check if greater than 100
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q15: Check if a number is greater than 100
// Implement `solve(n)` to return: true if n > 100, else false.

const lib = require('../if_else/if_else_examples');

function greateThan100(num){
  if (typeof num !== 'number'){
     console.log("Wrong Input")
  }
  if(num > 100){return true }else return false
}
console.log(greateThan100(1000))