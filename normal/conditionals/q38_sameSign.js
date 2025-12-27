/**
 * Q38 - Check if two numbers have the same sign
 *
 * Problem statement:
 * Given two numeric values `a` and `b`, determine whether they have the same sign (both
 * non-negative or both negative).
 *
 * Input:
 * - Two numeric values `a` and `b`.
 *
 * Output:
 * - Return or print `true` if both numbers have the same sign (both >= 0 or both < 0), otherwise `false`.
 *
 * Constraints & notes:
 * - Zero is considered non-negative (same sign as positive numbers) in most conventions.
 *
 * Examples:
 * - Input: (5, 3)   => Output: true
 * - Input: (-2, -5) => Output: true
 * - Input: (5, -3)  => Output: false
 *
 * Edge cases:
 * - One or both inputs being zero should be handled according to the chosen convention (commonly same sign with non-negative).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q38: Check if two numbers have the same sign

function sameSign(a,b){
  if(!Number.isInteger(a) || !Number.isInteger(b)){
    console.log("Please give a valid Integer")
    return;
  }

  if((a >= 0 && b >= 0) || (a < 0 && b < 0))
{
    return true;
  }else return false 


}

console.log(sameSign(-7,-3))