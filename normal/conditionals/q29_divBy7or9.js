/**
 * Q29 - Divisible by 7 or 9
 *
 * Problem statement:
 * Given an integer `n`, determine whether it is divisible by 7, by 9, or by both.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Print or return an indication of divisibility by 7 and/or 9. If neither, indicate the
 *   condition is not satisfied.
 *
 * Constraints & notes:
 * - Use modulus checks `n % 7 === 0` and `n % 9 === 0`.
 *
 * Examples:
 * - Input: 63 => Output: true (divisible by both 7 and 9)
 * - Input: 49 => Output: true (divisible by 7)
 * - Input: 18 => Output: true (divisible by 9)
 *
 * Edge cases:
 * - Zero is divisible by any non-zero integer; test expectations may vary.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q29: Check if a number is divisible by 7 or 9
const lib = require("../if_else/level2_basic_logic");

function divBy7AndBy9(num) {
  if (!Number.isInteger(num)) {
    console.log("Invalid Input");
    return;
  }

  const n = Math.abs(num);

  // check div by 7

  const lastDigit = num % 10;
  const remainingDigit = Math.floor(num / 10);
  const result = remainingDigit - lastDigit * 2;

  const isDivBY7 = result % 7 === 0;
  //  check div by 9
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = n % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
  }
  const isDivBy9 = sum % 9 === 0;

  if (isDivBY7 && isDivBy9) {
    console.log("Successfully Divisible by 7 and 9");
  } else {
    console.log("Condition not satisfies");
  }
}
divBy7AndBy9(343)
