/**
 * Best case: 0(n)
 * Average case: 0(n^2)
 * Worst case: 0(n^2)
 * Space : 0(1)
 **/

const col = require("./data").collection;

// Better method
const method1 = col => {
  const len = col.length;
  let swapped;

  do {
    swapped = false;
    for (var i = 0; i < len; i++) {
      if (col[i] > col[i + 1]) {
        const temp = col[i];
        col[i] = col[i + 1];
        col[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return col;
};

const method2 = col => {
  const len = col.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (col[j] < col[j - 1]) {
        const temp = col[j];
        col[j] = col[j - 1];
        col[j - 1] = temp;
      }
    }
  }

  return col;
};

console.log("Unsorted data", col);

console.log("Method 1", method1(col));
console.log("Method 2", method2(col));
