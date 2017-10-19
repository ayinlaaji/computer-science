/**
 * Name: Bubble Sort
 * Best case: 0(n) => Linear
 * Average case: 0(n^2) => Quadratic
 * Worst case: 0(n^2) => Quadratic
 * Space : 0(1) => Constant
 **/

const col = require("./data").collection;

const sort = col => {
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

console.log(sort(col));
