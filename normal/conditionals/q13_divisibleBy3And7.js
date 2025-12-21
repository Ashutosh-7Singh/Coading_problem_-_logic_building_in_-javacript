/**
 * Q13 - Check divisible by 3 and 7
 *
 * Problem statement:
 * Determine whether a given integer `n` is divisible by both 3 and 7.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if `n` is divisible by both 3 and 7 (i.e., divisible by 21), otherwise `false`.
 *
 * Constraints & notes:
 * - Use `n % 3 === 0 && n % 7 === 0` or `n % 21 === 0`.
 * - Negative numbers follow the same divisibility rules.
 *
 * Examples:
 * - Input: 21  => Output: true
 * - Input: 42  => Output: true
 * - Input: 14  => Output: false
 *
 * Edge cases:
 * - Zero (0) is divisible by every integer (usually treated as true for divisibility checks).
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q13: Check if a number is divisible by both 3 and 7
// Implement `solve(n)` to return: true if divisible by both, else false.

function devisibleBy3(n) {
  if (typeof n !== "number") {
    console.log("Input is not a number");
    return false;
  }
  let sum = 0;

  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  if (sum % 3 === 0) {
    console.log("Divisible by 3");
  } else {
    console.log("Not Divisible by 3");
  }
}

// devisibleBy3(123)

function devisibleBy7(num) {
  if (typeof num !== "number") {
    console.log("Input is not a number");
  }

  let lastDigit = num % 10;
  let remaining = Math.floor(num / 10);
  let squareOfLastdigit = lastDigit * 2;

  let result = remaining - squareOfLastdigit;

  if (result % 7 === 0) {
    console.log("Divisible By 7");
  } else {
    console.log("Not Divisible By 7");
  }
}
devisibleBy7(14);



// function devisibleBy3(num) {
//   if (typeof num !== "number") {
//     console.log("Input is not a number");
//     return false;
//   }
//   let sum = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
//   }

//    let lastDigit = num % 10;
//   let remaining = Math.floor(num / 10);
//   let squareOfLastdigit = lastDigit * 2;

//   let result = remaining - squareOfLastdigit;
//   if (sum % 3 === 0 && result %7 ===0) {
//     console.log("Divisible by 3 and 7 ");
//   } else {
//     console.log("Not Divisible by 3 and 7");
//   }
// }

// devisibleBy3(21)