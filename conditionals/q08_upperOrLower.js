/**
 * Q08 - Check uppercase or lowercase
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: "sample" => Output: "Input must be a single character"
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

function checkUpperCaseLowerCase(char){
  if(typeof char !== 'string'){
    console.log("Input is not a character")
  }

  if(char >='A' && char <= 'Z'){
    console.log("Upper Case")
  }else {
    console.log("Lowercase")
  }
}
checkUpperCaseLowerCase("A")
// Q8: Check if a character is uppercase or lowercase
// Implement `solve(ch)` to return: 'Uppercase', 'Lowercase', or error message for invalid input.

