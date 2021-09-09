/**
 * max increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function MLS(arr) {
  if (!arr.length) return 0;
  let max = 1;
  let current = 1;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] === arr[i - 1]) {
      i++;
    }
    if (arr[i] - arr[i - 1] - 1 === 0) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }
  return max;
}
// MLS([100,4,200,1,3,2])
module.exports = {
  MLS: MLS,
};
