/**
 * Q32 - Check char type: alphabet/digit/special
 *
 * Problem statement:
 * Given a single character, determine whether it is an alphabetic letter, a digit, or a special character.
 *
 * Input:
 * - A single-character string `ch`.
 *
 * Output:
 * - Return or print 'Alphabet' for letters, 'Digit' for numeric digits, and 'Special' for other characters.
 * - For invalid inputs (multi-character strings), print a helpful message.
 *
 * Constraints & notes:
 * - Treat uppercase and lowercase letters equally for the 'Alphabet' classification.
 *
 * Examples:
 * - Input: 'a' => Output: 'Alphabet'
 * - Input: '5' => Output: 'Digit'
 * - Input: '#' => Output: 'Special'
 *
 * Edge cases:
 * - Empty string or multi-character inputs should be rejected.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q32: Check if a character is an alphabet, digit, or special character

function checkType(value){

  if(value.length !== 1 ){
    console.log("Please Enter input in a single String ");
    return
  }

  if((value >= 'A' && value <= 'Z' ) || (value >='a' && value <= 'z')){
    console.log("Alphabet")
  }else if (value >= '0' && value <='9'){
    console.log("Digit")
  }else {
    console.log("Symbol")
  }




}

checkType("-")