function isEven(num){
    if(num % 2 == 0){
        return true
    }
    else {
        return false
    }
}



let x=10;
let y=13;
let z= 90;
if(isEven(x)){
    console.log("X is even");
    
}else{
    console.log("X is odd");
    
}
if(isEven(y)){
    console.log("y is even");
    
}else{
    console.log("y is odd");
    
}
if(isEven(z)){
    console.log("z is even");
    
}else{
    console.log("z is odd");
    
}

// let x=101;
// let result= isEven(x);

// if(result === true){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }


// for(let i = 1; i<= 20;i++){
//     let result = isEven(i);
//     if(result === true){
//         console.log(i,"Even")
//     }else{
//         console.log(i,"Odd")
//     }
// }