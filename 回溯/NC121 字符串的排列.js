/**
 * @param {string} s
 * @return {string[]}
 */
var Permutation = function (s) {
  // leetcode剑指 Offer 38. 字符串的排列
  let n = s.length;
  let arr = Array.from(s).sort();
  let visited = new Array(n).fill(false);
  let result = [];
  let tmp = [];
  function dfs(tmp) {
    if (tmp.length === n) {
      result.push([...tmp]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] || (!visited[i - 1] && arr[i] === arr[i - 1])) {
        continue;
      }
      visited[i] = true;
      tmp.push(arr[i]);
      dfs(tmp);
      visited[i] = false;
      tmp.pop();
    }
  }
  dfs(tmp);
  let size = result.length;
  let test = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    test[i] = result[i].join("");
  }
  return test;
};
module.exports = {
  Permutation: Permutation,
};
