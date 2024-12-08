// function smallest(num1, num2, num3) {
//   if (num1 < num2 && num1 < num3) {
//     console.log(`Smallest number is ${num1}`);
//   } else if (num2 < num1 && num2 < num3) {
//     // return num2

//     console.log(`Smallest number is ${num2}`);
//   } else if (num3 < num1 && num3 < num2) {
//     // return num3
//     console.log(`smallest number is ${num3}`);
//   }else 
  
//   {
//     console.log(`Smallest number is ${num1}`);
    
//   }
// }

// smallest(2,2,2)

function smallestNumber(a,b,c)
{
    let smallestNumber = a
    if(b<smallestNumber){
        smallestNumber=b;
    }
    if(c<smallestNumber){
        smallestNumber=c
    }
    return smallestNumber
}

console.log(smallestNumber(2,3,4))
console.log(smallestNumber(2,2,2))