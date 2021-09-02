/**
 *
 * @param mat int整型二维数组
 * @param n int整型
 * @param m int整型
 * @param x int整型
 * @return int整型一维数组
 */
function findElement(mat, n, m, x) {
  let result = [];
  if (!m) return result;
  if (!n) return result;
  let row = 0;
  let col = m - 1;
  while (row < n && col >= 0) {
    if (x > mat[row][col]) {
      row++;
    } else if (x < mat[row][col]) {
      col--;
    } else {
      return [row, col];
    }
  }
  return result;
}
module.exports = {
  findElement: findElement,
};
