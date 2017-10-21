/**
 * Name: Merge Sort
 * Best case: 0(nlogn) => linearithmic
 * Average case: 0(nlogn) => linearithmic
 * Worst case: 0(nlogn) => linearithmic
 * Space : 0(n) => Linear
 **/

const col = require("./data").collection;

const sort = col => {
  const stitch = (left, right) => {
    let x = [];

    while (left.length && right.length) {
      const cond = left[0] < right[0];
      x.push(cond ? left.shift() : right.shift());
    }
    return x.concat(left.length ? left : right);
  };

  const split = col => {
    if (col.length < 2) return col;
    const mid = Math.floor(col.length / 2);
    const left = split(col.slice(0, mid));
    const right = split(col.slice(mid));
    return stitch(left, right);
  };

  return split(col);
};

console.log(sort(col));
