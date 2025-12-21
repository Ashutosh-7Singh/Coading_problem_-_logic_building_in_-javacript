/**
 * Q34 - Check pass or fail (>=40)
 *
 * Problem statement:
 * Given a marks value, determine whether the student has passed. Passing threshold is 40.
 *
 * Input:
 * - A single numeric value `marks`.
 *
 * Output:
 * - Return or print 'Pass' if `marks >= 40`, otherwise 'Fail'.
 * - Non-numeric inputs should be treated as invalid.
 *
 * Constraints & notes:
 * - Marks may be integer or floating point depending on tests.
 *
 * Examples:
 * - Input: 45 => Output: 'Pass'
 * - Input: 39 => Output: 'Fail'
 *
 * Edge cases:
 * - Exactly 40 is considered 'Pass'.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q34: Check if marks are pass or fail (pass ≥ 40)

function passFail (marks){
  if (typeof marks !== 'number'){
    console.log("please put a valid Markes")
  }

  if(marks >= 40 ){
    return "pass"
  }else {
    return "fail"
  }
}

console.log(passFail(342))