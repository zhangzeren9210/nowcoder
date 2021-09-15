/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param A string字符串
 * @param n int整型
 * @return int整型
 */

export function getLongestPalindrome(A: string, n: number): number {
  // leetcode 5
  let max = 0;
  function helper(left, right) {
    while (left >= 0 && right < A.length && A[left] === A[right]) {
      left--;
      right++;
    }
    max = Math.max(right - 1 - (left + 1) + 1, max);
  }
  for (let i = 0; i < A.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  return max;
}
