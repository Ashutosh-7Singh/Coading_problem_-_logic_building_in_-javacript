function swap(arr, i, j) {
  // Swaps values at index i and j
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function seperate(arr) {

  /* =========================
     CORNER CASES
     ========================= */

  // If input is not an array
  if (!Array.isArray(arr)) {
    console.log("Input must be an array");
    return;
  }

  // Empty array or single element array
  // Already separated by definition
  if (arr.length <= 1) {
    return;
  }

  let i = 0;                  // left pointer
  let j = arr.length - 1;     // right pointer

  /* =========================
     MAIN LOGIC
     ========================= */

  // Loop runs until pointers cross
  // This ensures array is read only once (O(n))
  while (i < j) {

    // Case 1: Left value is 0
    // 0 belongs on the left → correct position
    if (arr[i] === 0) {
      i++;
    }

    // Case 2: Right value is 1
    // 1 belongs on the right → correct position
    else if (arr[j] === 1) {
      j--;
    }

    // Case 3: Left has 1 AND right has 0
    // Both are in wrong positions → swap
    else {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
}



// function seperate(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     if (arr[i] === 0) {
//       i++;
//     } 
//     else if (arr[j] === 1) {
//       j--;
//     } 
//     else {
//       // left has 1 and right has 0 → wrong positions
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//       j--;
//     }
//   }
// }
