/**
 * Q06 - Check divisible by 11
 *
 * Problem statement:
 * Determine whether a number is divisible by 11. A common test is to compute the
 * difference between the sum of digits at odd positions and the sum of digits at even
 * positions; if the difference is divisible by 11, the number is divisible by 11.
 *
 * Input:
 * - A non-negative integer `n`.
 *
 * Output:
 * - Return or print 'Divisible by 11' if `n` is divisible by 11, otherwise 'Not Divisible by 11'.
 *
 * Constraints & notes:
 * - For large values, process digits as strings or use digit extraction loops.
 * - Negative numbers may be converted to positive before processing.
 *
 * Examples:
 * - Input: 2728 => Output: 'Not Divisible by 11'
 * - Input: 121  => Output: 'Divisible by 11'
 *
 * Edge cases:
 * - Single-digit numbers are not divisible by 11 (except 0).
 * - Non-integer inputs should be validated.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q6: Check if a number is divisible by 11
// Implement `solve(n)` to return: 'Divisible by 11' or 'Not divisible by 11'.

function divisibleByEleven(number){
if (typeof number !== 'number') {
  console.log("Please Provide a Valid Number")
}

let oddSum = 0;
let evenSum = 0;
let position = 1; // Start from position 1 (rightmost digit)

while (number > 0) {
  const digit = number % 10; // Get the last digit

  if (position % 2 === 1) {
    oddSum += digit; // Add to odd position sum
  } else {
    evenSum += digit; // Add to even position sum
  }

  number = Math.floor(number / 10); // Remove the last digit
  position++; // Move to the next position
}

const difference = Math.abs(oddSum - evenSum);

if (difference % 11 === 0) {
  console.log("Divisible by 11");
} else {
  console.log("Not Divisible by 11");
}
}

divisibleByEleven(2728);