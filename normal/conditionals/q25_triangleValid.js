/**
 * Q25 - Check triangle validity (sum=180)
 *
 * Problem statement:
 * Given three angles of a proposed triangle (in degrees), determine whether they form a valid triangle.
 * A triangle is valid if all angles are positive and the sum of angles equals 180 degrees.
 *
 * Input:
 * - Three numeric values representing angles `a`, `b`, and `c`.
 *
 * Output:
 * - Return or print 'Valid Triangle' if angles are positive and sum to 180, otherwise 'Invalid Triangle'.
 *
 * Constraints & notes:
 * - Angles should be positive numbers; zero or negative angles are invalid.
 *
 * Examples:
 * - Input: [60,60,60] => Output: 'Valid Triangle'
 * - Input: [0,90,90]  => Output: 'Invalid Triangle'
 *
 * Edge cases:
 * - Floating point angles that sum to 180 within a small epsilon may be considered valid depending on tests.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q25: Check if a triangle is valid (sum of angles = 180)
const lib = require('../if_else/level2_basic_logic');

function validTriangle(a, b, c) {

  if (a > 0 && b > 0 && c > 0 && a + b + c === 180) {
    console.log("Valid Triangle");
  } else {
    console.log("Invalid Triangle");
  }
}

validTriangle(60, 60, 60);
