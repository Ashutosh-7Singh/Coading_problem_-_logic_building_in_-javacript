/**
 * Q30 - Senior citizen eligibility (age >= 60)
 *
 * Problem statement:
 * Given an integer `age`, determine whether a person is considered a senior citizen.
 * A person is considered a senior citizen if their age is greater than or equal to 60.
 *
 * Input:
 * - A single integer `age` (may be positive, zero, or negative if invalid input is provided).
 *
 * Output:
 * - If `age >= 60` output the string: "Eligible for senior discount"
 * - If `age < 60` output the string: "Not eligible for senior discount"
 * - For invalid ages (negative), you may choose to treat them as not eligible or handle explicitly
 *   depending on the surrounding test harness. Typical expected behavior is to treat negative
 *   ages as invalid and return "Not eligible for senior discount".
 *
 * Constraints & notes:
 * - The function should work for typical integer inputs within JavaScript's number range.
 * - If input is not an integer, the implementation may coerce or validate based on test expectations.
 *
 * Examples:
 * - Input: 65  => Output: "Eligible for senior discount"
 * - Input: 60  => Output: "Eligible for senior discount"
 * - Input: 59  => Output: "Not eligible for senior discount"
 * - Input: -5  => Output: "Not eligible for senior discount" (invalid age handled as not eligible)
 *
 * Edge cases:
 * - Exactly 60 should be eligible.
 * - Very large ages (e.g., 120) should be treated as eligible.
 * - Non-numeric inputs should be validated by the caller; tests typically pass numeric values.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q30: Check senior citizen eligibility (age ≥ 60)
const lib = require('../if_else/level2_basic_logic');

function checkSenior(age){
  if(!Number.isInteger(age)){
    console.log("Inavlid Input ")
  }

  const ageAgain=Math.abs(age)
  if(ageAgain >= 60){
    console.log("Eligible for senior discount")
  }else if (ageAgain <60) {
    console.log("Not eligible for senior discount")
  }else{
    console.log("invalid age handled as not eligible")
  }
}

checkSenior(12)