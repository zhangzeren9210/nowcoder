/**
 *
 * @param x int整型
 * @return int整型
 */
function sqrt(x) {
  if (x <= 0) {
    return 0;
  }
  let left = 1;
  let right = x;
  while (true) {
    let mid = (left + right) >> 1;
    if (mid + 1 > x / (mid + 1) && mid <= x / mid) {
      return mid;
    } else if (mid > x / mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
module.exports = {
  sqrt: sqrt,
};
