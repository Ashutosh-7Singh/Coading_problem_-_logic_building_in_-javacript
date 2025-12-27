/**
 * Q36 - Divisible by 8 and 12
 *
 * Problem statement:
 * Determine whether a given integer `n` is divisible by both 8 and 12.
 *
 * Input:
 * - A single integer `n`.
 *
 * Output:
 * - Return or print `true` if `n` is divisible by both 8 and 12, otherwise `false`.
 *
 * Constraints & notes:
 * - Being divisible by both 8 and 12 is equivalent to being divisible by lcm(8,12)=24.
 *
 * Examples:
 * - Input: 24 => Output: true
 * - Input: 48 => Output: true
 * - Input: 8  => Output: false
 *
 * Edge cases:
 * - Zero is divisible by any non-zero integer; test expectations may vary.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q36: Check if a number is divisible by 8 and 12

function divBy8And12(value) {
  if (!Number.isInteger(value)) {
    console.log("Please give a valid Interger");
    return;
  }
  if (value < 0) {
    value = value * -1;
  }
  const lastThreeDigit = value % 1000;
  const divBy8 = lastThreeDigit % 8 === 0;

  // rule of three
  let sum = 0;
  let temp = value;
  while (temp > 0) {
    let lastdigit = temp % 10;
    sum += lastdigit;
    temp = Math.floor(temp / 10);
  }

  const divBy3 = sum % 3 === 0;

  //  rule of 4
  const last2Digit = value % 100;
  const divBy12= last2Digit % 12 === 0;
  
  if (divBy8 && divBy3 && divBy12) {
    console.log("Divisible By 8 & 12");
  } else {
    console.log("Not Dividible BY 8 and 12");
  }
}

divBy8And12(481);
