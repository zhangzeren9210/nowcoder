/**
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  let maxLen = 0;
  let maxIndex = 0;
  let dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      // i/j比索引大1
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          maxIndex = i;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  // maxIndex-1到maxIndex-maxLen正好maxLen个
  return str1.substring(maxIndex - maxLen, maxIndex);
}

module.exports = {
  LCS: LCS,
};
