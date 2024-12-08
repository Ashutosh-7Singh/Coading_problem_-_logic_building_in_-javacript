
function reverseAstring(inputString) {
  if (typeof inputString !== "string") {
    console.log("Only String is allowed");
    return "Invalid Input";
  }
  let result = " ";
  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }
  return result;
}
console.log(reverseAstring("ashutosh"));
console.log(reverseAstring(564564564));



