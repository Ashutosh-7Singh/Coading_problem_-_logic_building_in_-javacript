/**
 * Q27 - Check divisible by 2, 3, or both
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: 12 => Output: "Divisible by both 2 and 3"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q27: Check if a number is divisible by 2, 3, or both
// const lib = require('../if_else/level2_basic_logic');

function divisibleBy2And3(num){
  let sum = 0;
  let bum=num;
 let digit=num%10
 sum  += digit
 num = num/10 
 
 if(num %  3 === 0 && (bum % 10 === 0 || bum % 10 === 2  || bum % 10 === 4 ||  bum % 10 ===6 || num % 10 ===8 )){
  console.log("Divisible By 2 & 3")
 }else {
  console.log("Not Divisible ")
 }
}
divisibleBy2And3(321)