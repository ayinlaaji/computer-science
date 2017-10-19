/**
 * Best case: 0(n)
 * Average case: 0(n^2)
 * Worst case: 0(n^2)
 * Space : 0(1)
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
