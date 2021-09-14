/**
 * max sum of the subarray
 * @param arr int整型一维数组 the array
 * @return int整型
 */
// 动态规划
function maxsumofSubarray(arr) {
  // leetcode 53
  let pre = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    pre = Math.max(arr[i], pre + arr[i]);
    max = Math.max(pre, max);
  }
  return max;
}
module.exports = {
  maxsumofSubarray: maxsumofSubarray,
};
