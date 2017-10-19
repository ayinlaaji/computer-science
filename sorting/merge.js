/**
 * Name: Merge Sort
 * Best case: 0(nlogn) => linearithmic
 * Average case: 0(nlogn) => linearithmic
 * Worst case: 0(nlogn) => linearithmic
 * Space : 0(n) => Linear
 **/

const col = require("./data").collection;

const stitch = (left, right) => {
  const results = [];
  while (left.length > 0 && right.length > 0) {
    const leftItem = left[0];
    const rightItem = right[0];
    const condition = leftItem <= rightItem;
    results.push(condition ? left.shift() : right.shift());
  }
  return results.concat(left.length ? left : right);
};

const sort = col => {
  const len = col.length;

  if (len < 2) return col;

  const midpoint = Math.floor(len / 2);

  const leftHalf = col.slice(0, midpoint);
  const rightHalf = col.slice(midpoint, len);

  const sortLeft = sort(leftHalf);
  const sortRight = sort(rightHalf);

  return stitch(sortLeft, sortRight);
};

console.log(sort(col));
