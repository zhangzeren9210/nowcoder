/**
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
function threeSum(num) {
  // leetcode 15
  let result = [];
  if (num.length < 3) {
    return result;
  }
  num.sort((a,b)=> a-b);
  for (let i = 0; i < num.length; i++) {
    if (i > 0 && num[i - 1] === num[i]) continue;
    let left = i + 1;
    let right = num.length - 1;
    while (left < right) {
      let sum = num[i] + num[left] + num[right];
      if (sum === 0) {
        result.push([num[i], num[left], num[right]]);
        while (left + 1 < right && num[left] === num[left + 1]) left++;
        while (right - 1 > left && num[right] === num[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

module.exports = {
  threeSum: threeSum,
};
