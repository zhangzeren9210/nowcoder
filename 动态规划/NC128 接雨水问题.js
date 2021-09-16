/**
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater(arr) {
  let result = 0;
  let len = arr.length;
  let left_max = new Array(len).fill(0);
  let right_max = new Array(len).fill(0);
  for (let i = 1; i < len - 1; i++) {
    left_max[i] = Math.max(left_max[i - 1], arr[i - 1]);
  }
  for (let i = len - 2; i > 0; i--) {
    right_max[i] = Math.max(left_max[i + 1], arr[i + 1]);
  }
  for (let i = 1; i < len - 1; i++) {
    let min = Math.min(left_max[i], right_max[i]);
    if (min > arr[i]) {
      result += min - arr[i];
    }
  }
  return result;
}

module.exports = {
  maxWater: maxWater,
};
