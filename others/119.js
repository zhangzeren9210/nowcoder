/**
 * 旋转数组
 * @param n int整型 数组长度
 * @param m int整型 右移距离
 * @param a int整型一维数组 给定数组
 * @return int整型一维数组
 */
function solve(n, m, a) {
  // leetcode189
  m %= n;
  reverse(a, 0, n - 1);
  reverse(a, 0, m - 1);
  reverse(a, m, n - 1);
  return a;
}
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
module.exports = {
  solve: solve,
};
