/**
 * Q18 - Check negative/zero/positive
 *
 * Problem statement:
 * Classify a numeric input `n` as 'Negative', 'Zero', or 'Positive'.
 *
 * Input:
 * - A single numeric value `n`.
 *
 * Output:
 * - Return or print 'Negative' if n < 0, 'Zero' if n === 0, otherwise 'Positive'.
 *
 * Constraints & notes:
 * - Non-numeric inputs should be validated and handled by the implementation.
 *
 * Examples:
 * - Input: -5 => Output: 'Negative'
 * - Input: 0  => Output: 'Zero'
 * - Input: 7  => Output: 'Positive'
 *
 * Edge cases:
 * - Very small/large numeric values follow normal sign rules.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q18: Check if a number is negative, zero, or positive
// Implement `solve(n)` to return: 'Negative', 'Zero', or 'Positive'.

const lib = require('../if_else/if_else_examples');
function negativeZeroPositive(num){
  if (typeof num !== 'number') return false

  if(num >0) {
    console.log("Positive")
  }else if(num < 0){
    console.log("Negative")
  }else{
    console.log("Zero")
  }
}

negativeZeroPositive(-9)