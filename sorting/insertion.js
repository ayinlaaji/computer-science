/**
 * Name: Insertion Sort
 * Best case: 0(n)
 * Average case: 0(n^2)
 * Worst case: 0(n^2)
 * Space : 0(1)
 **/

const col = require("./data").collection;

const sort = col => {
  const len = col.length;

  for (let i = 1; i < len; i++) {
    const temp = col[i];

    for (var j = i - 1; j >= 0 && col[j] > temp; j--) {
      col[j + 1] = col[j];
    }

    col[j + 1] = temp;
  }
  return col;
};

console.log(sort(col));
