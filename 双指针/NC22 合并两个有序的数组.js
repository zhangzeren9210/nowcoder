/**
 *
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
var merge = function (nums1, m, nums2, n) {
  // leetcode 88
  let p1 = m - 1;
  let p2 = n - 1;
  let curr = m + n - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      nums1[curr--] = nums2[p2--];
    } else if (p2 === -1) {
      nums1[curr--] = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      nums1[curr--] = nums1[p1--];
    } else {
      nums1[curr--] = nums2[p2--];
    }
  }
  return nums1;
};

module.exports = {
  merge: merge,
};
