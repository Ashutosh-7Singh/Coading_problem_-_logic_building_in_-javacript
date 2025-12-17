/**
 * Q10 - Check two-digit number
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: false
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