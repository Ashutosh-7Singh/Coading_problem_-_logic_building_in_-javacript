/**
 * Q16 - Check if two numbers are equal
 *
 * Problem statement:
 * Given two values `a` and `b`, determine whether they are strictly equal numbers.
 *
 * Input:
 * - Two values `a` and `b` (tests typically pass numeric values).
 *
 * Output:
 * - Return or print `true` if `a === b`, otherwise `false`.
 * - If inputs are not both numbers, implementations may validate and print an error.
 *
 * Constraints & notes:
 * - Use strict equality to avoid type-coercion surprises.
 *
 * Examples:
 * - Input: (2, 2)   => Output: true
 * - Input: (2, '2') => Output: false
 *
 * Edge cases:
 * - Floating point equality should be exact here; tests usually use integers.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q16: Check if two numbers are equal
// Implement `solve(a, b)` to return: true if equal, else false.

const lib = require('../if_else/if_else_examples');

function twoNumbers(a,b){
  if(typeof a !== 'number' && typeof b !== 'number') {
    console.log("Input is not a number");
    return;
  }

  if (a===b){
    return true
  }else{
    return false
  }
}
console.log(twoNumbers(2,2))