function Find(target, array) {
  let m = array.length;
  if (m === 0) return false;
  let n = array.length;
  if (n === 0) return false;
  let row = 0;
  let col = n - 1;
  while (row < m && col >= 0) {
    if (target === array[row][col]) {
      return true;
    } else if (target > array[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}
module.exports = {
  Find: Find,
};
