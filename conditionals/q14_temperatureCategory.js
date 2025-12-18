/**
 * Q14 - Check temperature category
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Invalid temperature"
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