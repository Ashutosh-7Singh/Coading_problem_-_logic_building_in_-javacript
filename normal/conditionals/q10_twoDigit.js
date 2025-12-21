/**
 * Q10 - Check two-digit number
 *
 * Problem statement:
 * Determine whether a given value is a two-digit number (10 to 99 or -10 to -99).
 *
 * Input:
 * - A single value `n` (numeric expected).
 *
 * Output:
 * - Return or print `true` if `n` is a two-digit integer (absolute value between 10 and 99), else `false`.
 *
 * Constraints & notes:
 * - Negative two-digit numbers are considered two-digit (e.g., -45 -> true).
 * - Non-integer values or strings should be validated or coerced depending on tests.
 *
 * Examples:
 * - Input: 12  => Output: true
 * - Input: -99 => Output: true
 * - Input: 5   => Output: false
 *
 * Edge cases:
 * - Exactly 10 and 99 are included as two-digit numbers.
 * - Strings that look like numbers may be coerced if implementation allows.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q10: Check if a number is a two-digit number
// Implement `solve(n)` to return: true if two-digit (including negative two-digit), else false.


function isDoubleDigit(digit){
    const str=String(digit)
    
    if(str.length !== 1 && str >=10 &&  str <= 99){
        console.log("Double Digit")
    }else{
        console.log("Not Double Digit");
        
    }
}

isDoubleDigit("121")