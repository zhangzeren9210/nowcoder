/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 如果目标值存在返回下标，否则返回 -1
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
// 左闭右开
function search1(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (target === nums[mid]) {
      right = mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return target === nums[left] ? left : -1;
}
module.exports = {
  search: search,
};
