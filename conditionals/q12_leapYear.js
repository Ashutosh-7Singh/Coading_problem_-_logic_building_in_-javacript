/**
 * Q12 - Check leap year
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q12: Check if a year is a leap year
// Implement `solve(year)` to return: true if leap year, else false.

function checkLeapYear(year){
   if(year % 400 === 0 || year % 4===0){
  console.log("leap year")
   }else{
    console.log("not a lear year ")
   }
}

checkLeapYear(2012)