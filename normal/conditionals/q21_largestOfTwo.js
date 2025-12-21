/**
 * Q21 - Find the largest of two numbers
 *
 * Problem statement:
 * Given two numeric values `a` and `b`, determine and return the larger value.
 *
 * Input:
 * - Two numeric values `a` and `b`.
 *
 * Output:
 * - Return or print the larger of the two numbers. If equal, return either value.
 *
 * Constraints & notes:
 * - Use strict numeric comparison. Non-numeric inputs should be validated.
 *
 * Examples:
 * - Input: [10,20] => Output: 20
 * - Input: [5,5]   => Output: 5
 *
 * Edge cases:
 * - Negative numbers are allowed; the comparison should work normally.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q21: Find the largest of two numbers
const lib = require('../if_else/level2_basic_logic');

function largestOfTwo(a,b){
  if(a>b){
    console.log(a)
  }else{
    console.log(b)
  }
}

largestOfTwo(12,24)