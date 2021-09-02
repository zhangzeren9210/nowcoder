/**
 * retrun the longest increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型一维数组
 */
function LIS(arr) {
  let len = arr.length;
  let max = 0;
  let result = [];
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  for (let i = dp.length - 1, j = max; i >= 0; i--) {
    if (dp[i] === max) {
      j--;
      result.unshift(arr[i]);
    }
  }
}
module.exports = {
  LIS: LIS,
};
