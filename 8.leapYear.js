/* 
Write a function that tells if provided year is aleap year
Leap year
Every 4th year is a leap year

so we have to return true or false 
*/

function isLeapYear(year) {
    if(typeof year !=="number"){
        console.log("year Must be a integer");
        return 
    }
    if(year <0){
        console.log("year must be a positive integer");
        return
        
    }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2002));
console.log(isLeapYear(2003));
console.log(isLeapYear(2004));
