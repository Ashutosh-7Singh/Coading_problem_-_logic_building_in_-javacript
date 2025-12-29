function bothRightLeft(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";

    // LEFT triangle
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    // SPACE between two triangles
    for (let space = 1; space <= (n - row) * 2; space++) {
      str += " ";
    }

    // RIGHT triangle
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }
}

bothRightLeft(5);




// function rightTrainagle(n){
//     for(let row = 1;row<=n;row++){
//         let str="";
//         let space=n-row;
//         for(let col=1;col<=space;col++){
//             str += " ";
//         }
//         for(let col=1;col<=row;col++){
//             str += "*"
//         }
//         console.log(str)
//     }
// }

// function bothRightLeft(n){
//     leftTriangle(n);
//     rightTrainagle(n);
// }
// bothRightLeft(10)
