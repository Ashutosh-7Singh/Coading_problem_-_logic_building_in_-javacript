function invertedRightTriangle(n) {
  for (let row = n; row >= 1; row--) {
    let str = "";

    // spaces
    for (let space = 1; space <= n - row; space++) {
      str += " ";
    }

    // stars
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    console.log(str);
  }
}

invertedRightTriangle(5);
