/**
 * Name: Insertion Sort
 * Best case: 0(n) => Linear
 * Average case: 0(n^2) => Quadratic
 * Worst case: 0(n^2) => Quadratic
 * Space : 0(1) => Constant
 **/

const col = require("./data").collection;

const sort = col => {
  const len = col.length;
  for (let i = 0; i < len; i++) {
    const pick = col[i];
    let j = i - 1;
    while (j >= 0 && pick < col[j]) {
      col[j + 1] = col[j];
      j = j - 1;
    }
    col[j + 1] = pick;
  }
  return col;
};

console.log(sort(col));
