/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param A string字符串
 * @param n int整型
 * @return int整型
 */

function getLongestPalindrome(A, n) {
  // write code here
  if (n < 2) {
    return n;
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }
  function helper(start, end) {
    while (start >= 0 && end < n && A[start] == A[end]) {
      start--;
      end++;
    }

    if (end - 1 - (start + 1) + 1 > result.length) {
      result = A.slice(start + 1, end);
    }
  }
  return result.length;
}
