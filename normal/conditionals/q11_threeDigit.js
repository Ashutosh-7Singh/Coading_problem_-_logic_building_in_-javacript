/**
 * Q11 - Check three-digit number
 *
 * Problem statement:
 * Determine whether a given number `n` is a three-digit integer (100-999 or -100 to -999).
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print `true` if `n` is a three-digit integer (absolute value between 100 and 999), else `false`.
 *
 * Constraints & notes:
 * - Negative three-digit numbers should be considered valid three-digit numbers.
 * - Non-integer values should be validated depending on expected behavior.
 *
 * Examples:
 * - Input: 123  => Output: true
 * - Input: -456 => Output: true
 * - Input: 99   => Output: false
 *
 * Edge cases:
 * - Exactly 100 and 999 are included as three-digit numbers.
 * - Strings may be coerced by some implementations; tests typically use numeric inputs.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q11: Check if a number is a three-digit number
// Implement `solve(n)` to return: true if three-digit (including negative three-digit), else false.

function isThreeDigit(digit){
   const str=String(digit);

   if(str.length ===3 && str >=100 && str <= 999){
    console.log("Three Digit ")
   }else{
    console.log("Not Three Digit")
   }
}

isThreeDigit("123")
