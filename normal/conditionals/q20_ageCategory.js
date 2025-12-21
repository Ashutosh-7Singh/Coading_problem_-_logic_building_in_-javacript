/**
 * Q20 - Check age category
 *
 * Problem statement:
 * Given a person's age, classify them into categories such as 'Child', 'Teenager', or 'Adult'.
 *
 * Input:
 * - A single numeric value `age` (non-negative integer expected).
 *
 * Output:
 * - Return or print one of the category strings depending on the age:
 *   - 'Child' for ages typically < 13
 *   - 'Teenager' for ages typically 13-19
 *   - 'Adult' for ages >= 20
 * - For invalid ages (negative or non-numeric), print 'Invalid age' or handle as tests expect.
 *
 * Constraints & notes:
 * - The exact category boundaries may vary; the implementation should follow the project's
 *   convention (common boundaries used above).
 *
 * Examples:
 * - Input: 10 => Output: 'Child'
 * - Input: 16 => Output: 'Teenager'
 * - Input: 25 => Output: 'Adult'
 *
 * Edge cases:
 * - Exactly 13 and 20 should be placed according to the chosen boundaries.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q20: Check if a person is a child, teenager, or adult
// Implement `solve(age)` to return: 'Child', 'Teenager', or 'Adult' (and handle invalid ages).

const lib = require('../if_else/if_else_examples');

function 