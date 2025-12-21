/**
 * Q27 - Check divisible by 2, 3, or both
 *
 * Problem statement:
 * Given an integer `n`, determine whether it is divisible by 2, by 3, by both, or by neither.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Print or return one of the messages: 'Divisible by 2', 'Divisible by 3', 'Divisible by both 2 and 3',
 *   or 'Not Divisible' depending on the divisibility.
 *
 * Constraints & notes:
 * - Use `n % 2 === 0` and `n % 3 === 0` checks.
 * - Negative numbers follow the same divisibility rules.
 *
 * Examples:
 * - Input: 12 => Output: 'Divisible by both 2 and 3'
 * - Input: 9  => Output: 'Divisible by 3'
 * - Input: 8  => Output: 'Divisible by 2'
 *
 * Edge cases:
 * - Zero (0) is divisible by every non-zero integer: usually 'Divisible by both 2 and 3'.
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