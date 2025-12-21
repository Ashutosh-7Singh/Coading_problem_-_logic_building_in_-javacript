/**
 * Q05 - Check divisible by 5
 *
 * Problem statement:
 * Determine whether an integer is divisible by 5.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print 'Divisible by 5' if `n` is divisible by 5, otherwise 'Not divisible by 5'.
 * - Non-numeric inputs should be treated as invalid.
 *
 * Constraints & notes:
 * - You can check the last digit (0 or 5) or use `n % 5 === 0`.
 *
 * Examples:
 * - Input: 25  => Output: 'Divisible by 5'
 * - Input: 42  => Output: 'Not divisible by 5'
 *
 * Edge cases:
 * - Negative numbers follow the same divisibility rules.
 * - Non-integer values should be validated depending on the expected behavior.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */


function divisibleByFive(number){
  if (typeof number !== 'number'){
    console.log("Please Give a Valid Number")
  }

  const lastDigit= number % 10;

  if(lastDigit ===0 || lastDigit ===5){
    console.log("Divisible by 5");
  }else{
    console.log("Not Divisible by 5")
  }
}
divisibleByFive(123456789)

// Q5: Check if a number is divisible by 5
// Implement `solve(n)` to return: 'Divisible by 5' or 'Not divisible by 5'.


