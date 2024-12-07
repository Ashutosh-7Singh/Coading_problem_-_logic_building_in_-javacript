// Write a function that calculate and prints the area of a rectangle given its length and width.

function area(length, breadth) {
  if (length <= 0 || breadth <= 0) {
    console.log(`Error : ${length} and ${breadth} should be a prostive number`);
    return;
  }
  const area = length * breadth;
  console.log("The area of the reactangle is :", area);
}

area(5, 4);
area(500, -4);
