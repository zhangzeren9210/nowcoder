/**
 *
 * @param s string字符串
 * @return string字符串一维数组
 */
function restoreIpAddresses(s) {
  // leetcode 92
  let tmp = new Array(4).fill(0);
  let result = [];
  function dfs(count, start) {
    if (count === 4) {
      if (start === s.length) {
        result.push(tmp.join("."));
      }
      return;
    }
    if (start === s.length) {
      return;
    }
    if (s[start] == 0) {
      tmp[count] = "0";
      dfs(count + 1, start + 1);
      return;
    }
    for (let i = start; i < s.length; i++) {
      let current = Number(s.slice(start, i + 1));
      if (current > 0 && current <= 255) {
        tmp[count] = current;
        dfs(count + 1, i + 1);
      } else {
        break;
      }
    }
  }
  dfs(0, 0);
  return result;
}
module.exports = {
  restoreIpAddresses: restoreIpAddresses,
};
