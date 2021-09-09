/**
 * return topK string
 * @param strings string字符串一维数组 strings
 * @param k int整型 the k
 * @return string字符串二维数组
 */
function topKstrings(strings, k) {
  // write code here
  let map = new Map();

  strings.forEach((item) => {
    if (map.has(item)) {
      let value = parseInt(map.get(item));
      value = value + 1;
      map.set(item, value.toString());
    } else {
      map.set(item, "1");
    }
  });

  let arr = Array.from(map);
  arr.sort((a, b) => {
    if (a[1] != b[1]) {
      return b[1] - a[1];
    } else {
      if (a[0] < b[0]) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  console.log(arr)
  return arr.slice(0, k);
}
topKstrings(["a","b","c","b"],2)
module.exports = {
  topKstrings: topKstrings,
};
