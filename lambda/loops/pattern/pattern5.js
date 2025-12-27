

//         * 
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

function pattern4(n) {
  for (let row = 1; row <= n; row += 1) {
    // first we need to calculate space
    let str = "";
    let space = n - row;
    for (let j = 1; j <= space; j++) {
      str += " ";
    }
    let stars = 2*row-1;
    for (let col = 1; col <= stars; col += 1) {
      str += "*";
    }

    console.log(str);
  }
}
pattern4(10);
