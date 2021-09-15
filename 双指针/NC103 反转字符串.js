/**
 * 反转字符串
 * @param str string字符串
 * @return string字符串
 */
function solve(str) {
  let arr = str.split("");
  let i = 0;
  let len = arr.length - 1;
  while (i < arr.length / 2) {
    let tmp = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = tmp;
    i++;
  }
  return arr.join("");
}

module.exports = {
  solve: solve,
};
