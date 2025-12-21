/**
 * Q26 - Triangle type: equilateral/isosceles/scalene
 *
 * Description: See implementation in this file.
 *
 * Example 1: Input: [60,60,60] => Output: "Equilateral"
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