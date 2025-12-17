/**
 * Q06 - Check divisible by 11
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not divisible by 11"
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