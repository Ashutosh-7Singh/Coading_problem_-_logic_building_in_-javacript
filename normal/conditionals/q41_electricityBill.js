/**
 * Q41 - Calculate Electricity Bill
 *
 * Problem Statement:
 *   Calculate the total electricity bill for a given number of units consumed, using the following tiered slab rates:
 *
 *   - For the first 100 units: Rs. 1 per unit
 *   - For the next 100 units (101-200): Rs. 2 per unit
 *   - For the next 100 units (201-300): Rs. 3 per unit
 *   - For units above 300: Rs. 5 per unit
 *   - Add a fixed meter charge of Rs. 50 to every bill
 *   - If the total bill (before meter charge) exceeds Rs. 500, add a surcharge of 15% on the total bill (excluding meter charge)
 *
 * Input:
 *   - A single numeric value `units` (non-negative integer) representing energy units consumed.
 *
 * Output:
 *   - Return the total bill amount as a number (rounded to the nearest integer).
 *
 * Constraints:
 *   - units >= 0
 *   - Non-numeric or negative inputs should be handled as invalid (return 0 or error).
 *
 * Examples:
 *   Input: 50      Output: 100   (50*1 + 50 meter charge)
 *   Input: 150     Output: 250   (100*1 + 50*2 + 50 meter charge)
 *   Input: 250     Output: 500   (100*1 + 100*2 + 50*3 + 50 meter charge)
 *   Input: 350     Output: 695   (100*1 + 100*2 + 100*3 + 50*5 = 850, surcharge 15% on 850 = 127.5, total 977.5 + 50 meter charge = 1027.5, rounded)
 *
 * Edge Cases:
 *   - Zero units should result in only the fixed meter charge (Rs. 50).
 *   - Very large unit values should still calculate correctly using the slab logic and surcharge.
 *
 * Notes:
 *   - Always add the fixed meter charge.
 *   - Surcharge applies only if the bill before meter charge exceeds Rs. 500.
 *   - Round the final bill to the nearest integer.
 *
 * AUTO-GENERATED-TESTS: This header and tests block were added by tools/inject_tests.js
 */

// Q41: Calculate electricity bill based on units consumed

function electricityBill(unit) {
  if (typeof unit !== "number" || unit < 0) {
    console.log("Invalid Input");
    return;
  }

  let bill = 0;

  if (unit <= 100) {
    bill = unit * 1;
  } else if (unit <= 200) {
    bill = 100 * 1 + (unit - 100) * 2;
  } else if (unit <= 300) {
    bill = 100 * 1 + 100 * 2 + (unit - 200) * 3;
  } else {
    bill = 100 * 1 + 100 * 2 + 100 * 3 + (unit - 300) * 5;
  }
  if(bill>500){
    bill += (bill *(15/100))
  }

  bill += 50


  console.log(bill)
}
electricityBill(350);
