/**
 * Q12 - Check leap year
 *
 * Problem statement:
 * Determine whether a given year is a leap year. A year is a leap year if it is divisible by 400,
 * or divisible by 4 but not by 100.
 *
 * Input:
 * - An integer `year` representing the year.
 *
 * Output:
 * - Return or print `true` if `year` is a leap year, otherwise `false`.
 *
 * Constraints & notes:
 * - Year should be treated as an integer.
 * - Negative years may be handled by the caller (historical years), but tests typically use positive years.
 *
 * Examples:
 * - Input: 2000 => Output: true
 * - Input: 1900 => Output: false
 * - Input: 2012 => Output: true
 *
 * Edge cases:
 * - Year exactly divisible by 100 but not by 400 is not a leap year.
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