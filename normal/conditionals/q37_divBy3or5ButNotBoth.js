/**
 * Q37 - Divisible by 3 or 5 but not both
 *
 * Problem statement:
 * Given an integer `n`, determine whether it is divisible by 3 or 5 but not both (exclusive or).
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if exactly one of `n % 3 === 0` or `n % 5 === 0` holds, otherwise `false`.
 *
 * Constraints & notes:
 * - Zero is divisible by both 3 and 5 so would yield `false` for this check.
 *
 * Examples:
 * - Input: 9  => Output: true (divisible by 3 only)
 * - Input: 10 => Output: true (divisible by 5 only)
 * - Input: 15 => Output: false (divisible by both)
 *
 * Edge cases:
 * - Negative numbers follow the same divisibility logic.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q37: Check if a number is divisible by 3 or 5 but not both
const lib = require("../if_else/level2_basic_logic");

function divBy3NotBy5(num) {
  if (!Number.isInteger) {
    console.log("Input Must be a Valid Integer");
  }

  if (num < 0) {
    num = num * -1;
  }
  let lastDigit= num % 10;

  //  rule of 5

  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let lastDigit = temp % 10;
    sum += lastDigit;
    temp = Math.floor(temp / 10);
  }
  if (
    (sum % 3 === 0 && lastDigit !== 0 && lastDigit !== 5) ||
    (sum % 3 !== 0 && lastDigit == 0 && lastDigit == 5)
  ) {
    return true;
  }else return false;
}

console.log(divBy3NotBy5(12))