/**
 * Name: Selection Sort
 * Best case: 0(n) => Linear
 * Average case: 0(n^2) => Quadratic
 * Worst case: 0(n^2) => Quadratic
 * Space : 0(1) => Constant
 **/
const col = require("./data").collection;

const sort = col => {
  const len = col.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (col[j] < col[min]) {
        min = j;
      }
    }
    const temp = col[i];
    col[i] = col[min];
    col[min] = temp;
  }
  return col;
};

console.log(sort(col));
