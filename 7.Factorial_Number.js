/*  What is a factorial number 
! this sign also denote factorial
example=
 1!:1
 2!:2*1=2
 3!:3*2*1=6
 4!:4*3*2*1=24
 0!=1
 */

function calculateFactorial(inputNumber) {
  if (inputNumber < 0) {
    console.log("Input number must be a positive integer.");
    return;
  }
  if (typeof inputNumber !== "number") {
    console.log("Iput must be a number");
    return;
  }
  let result = 1;
  for (let i = 1; i <= inputNumber; i++) {
    result *= i;
  }

  return result;
}
console.log(calculateFactorial(-10));
console.log(calculateFactorial("10")); 
