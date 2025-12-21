/**
 * Q08 - Check uppercase or lowercase
 *
 * Problem statement:
 * Given a single character, determine whether it is uppercase or lowercase.
 *
 * Input:
 * - A single-character string `ch`.
 *
 * Output:
 * - Return or print 'Upper Case' if the character is A-Z, 'Lowercase' if a-z.
 * - For invalid inputs (non-single-character or non-letter), print a helpful message.
 *
 * Constraints & notes:
 * - Non-letter characters should be rejected or handled according to test expectations.
 *
 * Examples:
 * - Input: 'A' => Output: 'Upper Case'
 * - Input: 'g' => Output: 'Lowercase'
 *
 * Edge cases:
 * - Multi-character strings should be rejected.
 * - Unicode letters outside ASCII may need special handling.
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

