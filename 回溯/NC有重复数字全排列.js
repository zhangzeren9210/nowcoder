/**
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
 var permuteUnique = function (nums) {
   // leetcode 47
    const size = nums.length;
    const result = [];
    const visited = new Array(size).fill(false);
    nums.sort();
    function dfs(list) {
      if (list.length === size) {
        result.push([...list]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
          continue;
        }
        list.push(nums[i]);
        visited[i] = true;
        dfs([...list]);
        list.pop();
        visited[i] = false;
      }
    }
    dfs([]);
    return result;
  };
  module.exports = {
      permuteUnique : permuteUnique
  };