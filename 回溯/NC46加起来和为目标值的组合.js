/**
 *
 * @param num int整型一维数组
 * @param target int整型
 * @return int整型二维数组
 */
function combinationSum2(num, target) {
    //leetcode 40
  let result = [];
  num.sort((a,b)=>a-b);
  function backtrace(sum, list, start) {
    if (sum === 0) {
      result.push([...list]);
      return;
    }
    for (let i = start; i < num.length; i++) {
      if (sum - num[i] < 0) {
        break;
      }
      if (i > start && num[i] == num[i - 1]) {
        continue;
      }
      list.push(num[i]);
      backtrace(sum - num[i], list, i + 1);
      list.pop();
    }
  }
  backtrace(target, [], 0);
  return result;
}
module.exports = {
  combinationSum2: combinationSum2,
};
