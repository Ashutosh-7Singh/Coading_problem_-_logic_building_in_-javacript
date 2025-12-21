/**
 * Q11 - Check three-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
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
