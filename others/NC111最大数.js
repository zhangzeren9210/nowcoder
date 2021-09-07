/**
 * 最大数
 * @param nums int整型一维数组
 * @return string字符串
 */
function solve(nums) {
  // leetcode 179
  // sort函数中 return小于0表示翻转当前两个数顺序，大于0表示不调整两个数字顺序
  nums.sort((a, b) => {
    let s1 = `${a}${b}`;
    let s2 = `${b}${a}`;
    return s2 - s1;
  });
  return nums[0] ? nums.join("") : "0";
}
module.exports = {
  solve: solve,
};
