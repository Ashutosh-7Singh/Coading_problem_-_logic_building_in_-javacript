/**
 * Q09 - Check single-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
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
