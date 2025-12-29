function triangle(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let space = 1; space <=n - row; space++) {
      str += " ";
    }
    for (let col = 1; col = 2 * row - 1; col++) {
      str += "*";
    }
    console.log(str);
  }
}
triangle(10);

// function printTriangle(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";

//     // spaces
//     for (let space = 1; space <= n - row; space++) {
//       str += " ";
//     }

//     // stars
//     for (let star = 1; star <= 2 * row - 1; star++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// printTriangle(5);
// // 