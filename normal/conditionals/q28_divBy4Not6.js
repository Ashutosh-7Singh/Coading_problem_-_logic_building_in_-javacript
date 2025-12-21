/**
 * Q28 - Divisible by 4 but not by 6
 *
 * Problem statement:
 * For a given integer `n`, determine whether it is divisible by 4 but not divisible by 6.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Print or return 'Divisible by 4 but not by 6' when condition holds, otherwise a message
 *   indicating the condition is not satisfied.
 *
 * Constraints & notes:
 * - A number divisible by 6 must be divisible by both 2 and 3. Use `n % 4 === 0` and `n % 6 !== 0`.
 *
 * Examples:
 * - Input: 8   => Output: 'Divisible by 4 but not by 6'
 * - Input: 12  => Output: 'Condition not satisfied' (since 12 divisible by both 4 and 6)
 *
 * Edge cases:
 * - Zero is divisible by every integer; depending on test expectations it may or may not be considered valid.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q28: Check if a number is divisible by 4 but not by 6
const lib = require("../if_else/level2_basic_logic");

// function divBy4NotBy6(num) {

//   if (!Number.isInteger(num)) {
//     console.log("Invalid input");
//     return;
//   }

//   const n = Math.abs(num);

//   // ---- Rule for 4: last two digits ----
//   const lastTwoDigits = n % 100;
//   const isDivBy4 = lastTwoDigits % 4 === 0;

//   // ---- Rule for 6 = divisible by 2 AND 3 ----

//   // Rule for 2
//   const lastDigit = n % 10;
//   const isDivBy2 =
//     lastDigit === 0 ||
//     lastDigit === 2 ||
//     lastDigit === 4 ||
//     lastDigit === 6 ||
//     lastDigit === 8;

//   // Rule for 3
//   let sum = 0;
//   let temp = n;

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }

//   const isDivBy3 = sum % 3 === 0;
//   const isDivBy6 = isDivBy2 && isDivBy3;

//   // ---- Final check ----
//   if (isDivBy4 && !isDivBy6) {
//     console.log("Divisible by 4 but not by 6");
//   } else {
//     console.log("Condition not satisfied");
//   }
// }

function divBy4NotBy6(num) {
  if (!Number.isInteger(num)) {
    console.log("Invalid Input");
    return;
  }

  const n = Math.abs(num);

  // Rules Of 4

  const lastTwoDigits = num % 100;
  const isDivBy4 = lastTwoDigits % 4 === 0;
  const lastDigit = num % 10;
  // Rules for 6 = divisible by 2 AND 3
  // rules for 2

  const isDivBy2 =
    lastDigit === 0 ||
    lastDigit === 2 ||
    lastDigit === 4 ||
    lastDigit === 6 ||
    lastDigit === 8;

  //  Rule for 3

  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
  }
  const isDivBy3 = sum % 3 === 0;
  const isDivBy6 = isDivBy2 && isDivBy3;

  if (isDivBy4 && !isDivBy6) {
    console.log("Divisible by 4 but not by 6");
  } else {
    console.log("Condition not stisfies");
  }
}

divBy4NotBy6(1609);
