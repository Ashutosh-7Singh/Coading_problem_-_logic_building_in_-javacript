/**
 * Q05 - Check divisible by 5
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Not divisible by 5"
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


