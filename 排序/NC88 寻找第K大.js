/**
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  let result = [];
  function heap() {
    for (let i = 0; i < n; i++) {
      if (result.length < K) {
        result.push(a[i]);
        up(result.length - 1);
      } else if (a[i] > result[0]) {
        result[0] = a[i];
        down(0);
      }
    }
  }
  function up(index) {
    while (index > 0) {
      let parent = (index - 1) >> 1;
      if (result[parent] > result[index]) {
        [result[parent], result[index]] = [result[index], result[parent]];
        index = parent;
      } else {
        break;
      }
    }
  }
  function down(index) {
    while (2 * index + 1 < K) {
      let child = 2 * index + 1;
      if (child + 1 < K && result[child] > result[child + 1]) {
        child++;
      }
      if (result[child] < result[index]) {
        [result[child], result[index]] = [result[index], result[child]];
        index = child;
      } else {
        break;
      }
    }
  }
  heap();
  return result[0];
}

module.exports = {
  findKth: findKth,
};
