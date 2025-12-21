/**
 * Q09 - Check single-digit number
 *
 * Problem statement:
 * Determine whether a given value represents a single-digit number (0-9 or -9 to -1).
 *
 * Input:
 * - A single value `n` (may be numeric or string representation in some tests).
 *
 * Output:
 * - Return or print `true` if `n` is a single-digit number (absolute value 0-9), otherwise `false`.
 * - For non-numeric inputs, behavior depends on test expectations (some implementations coerce strings).
 *
 * Constraints & notes:
 * - Treat negative single-digit numbers as valid single-digit (e.g., -3 -> true).
 * - Multi-digit numbers or non-numeric values should return false or be validated.
 *
 * Examples:
 * - Input: 2   => Output: true
 * - Input: -7  => Output: true
 * - Input: 10  => Output: false
 * - Input: 'w'=> Output: false
 *
 * Edge cases:
 * - Inputs like 0 should be considered single-digit (true).
 * - Strings containing a single digit may be coerced depending on implementation.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q9: Check if a number is a single-digit number
// Implement `solve(n)` to return: true if single-digit (including negative single digits), else false.

function isSingleDigit(value) {

  // convert value to string
  let str = String(value);

  // check length is 1 and between 0 to 9
  if (str.length === 1 && str >= "0" && str <= "9") {
    return true;
  } else {
    return false;
  }
}


console.log(isSingleDigit(2))
console.log(isSingleDigit("w"))
