/*
InputDeviceInfo;A number ,postive intefet>0
return :sum of all digit 
*/

function calculateSumOfDigits(inputNumber) {
  let sum = 0;

  while (inputNumber > 0) {
    let lastDigit = inputNumber % 10;
    inputNumber = Math.floor(inputNumber / 10);
    console.log("Last Digit :",lastDigit , "New Number", inputNumber);
    sum = sum + lastDigit;
  }
// return sum
  console.log("sum of digit is :", sum);
}

calculateSumOfDigits(11);
