/**
 * @param {string} s
 * @return {string[]}
 */
var Permutation = function (s) {
  // leetcode剑指 Offer 38. 字符串的排列
  let result = [];
  let arr = Array.from(s).sort();
  const size = arr.length;
  const visited = new Array(arr.length).fill(false);
  function dfs(list) {
    if (list.length === size) {
      // 深拷贝list
      return result.push([...list]);
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] || (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      list.push(arr[i]);
      dfs(list);
      visited[i] = false;
      list.pop();
    }
  }
  dfs([]);
  return result.map((item) => item.join(""));
};
module.exports = {
  Permutation: Permutation,
};
