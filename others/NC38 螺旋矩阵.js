/**
 *
 * @param matrix int整型二维数组
 * @return int整型一维数组
 */
var spiralOrder = function (matrix) {
  let result = [];
  if (matrix.length === 0 || matrix[0].length === 0) return result;
  let row1 = 0,
    row2 = matrix.length - 1,
    col1 = 0,
    col2 = matrix[0].length - 1;
  while (row1 <= row2 && col1 <= col2) {
    //左=>右
    for (let col = col1; col <= col2; col++) {
      result.push(matrix[row1][col]);
    }
    //上=>下
    for (let row = row1 + 1; row <= row2; row++) {
      result.push(matrix[row][col2]);
    }
    if (row1 < row2 && col1 < col2) {
      //右=>左
      for (let col = col2 - 1; col > col1; col--) {
        result.push(matrix[row2][col]);
      }
      //下=>上
      for (let row = row2; row > row1; row--) {
        result.push(matrix[row][col1]);
      }
    }
    col1++;
    col2--;
    row1++;
    row2--;
  }
  return result;
};
module.exports = {
  spiralOrder: spiralOrder,
};
