/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
 function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (nums[mid] === target) return mid;
      if (nums[mid] > nums[left]) {
        // 中间值比左边大，前半段有序
        // target在有序段中
        if (nums[mid] > target && nums[left] <= target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // 中间值比左边小，后半段有序
        if (nums[mid] < target && nums[right] >= target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
  
  module.exports = {
    search: search,
  };
  