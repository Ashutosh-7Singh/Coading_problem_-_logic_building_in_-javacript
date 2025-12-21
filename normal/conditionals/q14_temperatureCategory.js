/**
 * Q14 - Check temperature category
 *
 * Problem statement:
 * Categorize a temperature reading into 'Hot', 'Moderate', or 'Cold' based on numeric thresholds.
 *
 * Input:
 * - A single numeric value `temp` (temperature in degrees).
 *
 * Output:
 * - Return or print 'Hot' for high temperatures, 'Moderate' for mid-range, and 'Cold' for low.
 * - If input is not a valid number, print 'Invalid temperature' or similar.
 *
 * Constraints & notes:
 * - Typical thresholds used: Hot >= 40 (or >= 30 depending on local definitions). This file's
 *   implementation uses 40 for hot and 30 for moderate.
 *
 * Examples:
 * - Input: 45 => Output: 'Hot'
 * - Input: 32 => Output: 'Moderate'
 * - Input: 10 => Output: 'Cold'
 *
 * Edge cases:
 * - Non-numeric inputs should be rejected.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q14: Check if a temperature is hot (>30), moderate, or cold
// Implement `solve(temp)` to return: 'Hot', 'Moderate', 'Cold', or 'Invalid temperature'.

function checkTemperature(temp){
if(typeof temp !== 'number'){console.log("Invalid input")}

  if(temp>=40){
    console.log("hot")
  }else if(temp >= 30){
    console.log("Moderate")
  }else(
    console.log("cold")
  )
}

checkTemperature(230)