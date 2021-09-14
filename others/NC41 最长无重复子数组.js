/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  let start = 0;
  let map = {};
  let max = 0;
  for (let end = 0; end < arr.length; end++) {
    if (arr[end] in map) {
      start = Math.max(map[arr[end]] + 1, start);
    }
    max = Math.max(max, end - start + 1);
    map[arr[end]] = end;
  }

  return max;
}
module.exports = {
  maxLength: maxLength,
};
