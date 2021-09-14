/**
 *
 * @param numbers int整型一维数组
 * @param target int整型
 * @return int整型一维数组
 */
function twoSum(numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in map) {
      return [map[numbers[i]] + 1, i + 1];
    } else {
      map[target - numbers[i]] = i + 1;
    }
  }
}
module.exports = {
  twoSum: twoSum,
};
