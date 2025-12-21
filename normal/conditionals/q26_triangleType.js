/**
 * Q26 - Triangle type: equilateral/isosceles/scalene
 *
 * Problem statement:
 * Given three angles of a triangle (in degrees), identify the triangle type:
 * - 'Equilateral' if all three angles are equal (60,60,60)
 * - 'Isosceles' if exactly two angles are equal
 * - 'Scalene' if all three angles are different
 * - Optionally identify 'Right-Angled' if any angle is 90
 *
 * Input:
 * - Three numeric values `a`, `b`, and `c` representing angles. The triangle should be valid
 *   (sum to 180) before determining type.
 *
 * Output:
 * - Print or return a string naming the triangle type. For invalid triangles, print 'Not A Triangle'.
 *
 * Constraints & notes:
 * - Angles must be positive and sum to 180 to be considered a triangle.
 * - Order of checks may affect which label is used for special cases (e.g., isosceles right triangle).
 *
 * Examples:
 * - Input: [60,60,60] => Output: 'Equilateral'
 * - Input: [90,45,45] => Output: 'Isosceles Triangle' or 'Right-Angled Triangle' depending on priority
 * - Input: [30,60,90] => Output: 'Scalene Triangle' or 'Right-Angled Triangle'
 *
 * Edge cases:
 * - Non-integer angles and floating point rounding when summing to 180 may require tolerance.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q26: Check triangle type: equilateral, isosceles, or scalene
const lib = require('../if_else/level2_basic_logic');

function  triangle (a,b,c){
  if( a>0 && b>0 && c>0 && a+b+c === 180 && a == b !== c ){
    console.log("Isosceles Triangle")
  }else if(a>0 && b>0 && c>0 && a+b+c ===180 && a !==b !== c  ){
    console.log("Scalene Triangle")
  }else if(a>0 && b>0 && c>0 && a+b+c === 180 && a==b==c){
    console.log("Equilateral Triangle")
  }else if (a <90 && b < 90 && c < 90 && a+b+c === 180 ){
    console.log("Scalene Triangle")
  }else if (a = 90 && b>0 && c>0 && a+b+c=== 180 ){
    console.log("Right-Angled Triangle")
  }else if (a > 120 || b>0  || c>0  && a+b+c === 180 ){
    console.log("Obtuse Triangle")
  }else {
    console.log("Not A Triangle")
  }
}
triangle(20,20,140)