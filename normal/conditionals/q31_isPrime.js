/**
 * Q31 - Check if a number is prime
 *
 * Problem statement:
 * Determine whether a given integer `n` (>1) is a prime number. A prime number has no positive
 * divisors other than 1 and itself.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if `n` is prime, otherwise `false`.
 * - For `n <= 1`, return `false` (not prime).
 *
 * Constraints & notes:
 * - Use trial division up to sqrt(n) for reasonable performance on moderate inputs.
 * - Negative numbers and 0/1 are not prime.
 *
 * Examples:
 * - Input: 7  => Output: true
 * - Input: 12 => Output: false
 * - Input: 1  => Output: false
 *
 * Edge cases:
 * - Very large inputs may require specialized algorithms; tests usually use manageable sizes.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q31: Check if a number is prime (basic logic)
const lib = require("../if_else/level2_basic_logic");

function isPrime(num){
  if(!Number.isInteger(num)){
    console.log("Invalid Integer")
  }

  if (num<= 1){
    console.log("Not a Prime Number")
  }

  let i = 2;

  while(i < num){
if(num % i === 0){
  console.log("Not a Prime Number");
  return;
}
i++
  }
  console.log("Prime Number");
}

isPrime(31)