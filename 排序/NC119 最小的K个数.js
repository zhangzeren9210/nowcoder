function GetLeastNumbers_Solution(input, k) {
  // 使用大根堆
  let result = [];
  function heap() {
    for (let i = 0; i < input.length; i++) {
      if (result.length < k) {
        result.push(input[i]);
        up(result.length - 1);
      } else if (input[i] < result[0]) {
        result[0] = input[i];
        down(0);
      }
    }
  }
  function up(index) {
    while (index > 0) {
      let parent = (index - 1) >> 1;
      if (result[parent] < result[index]) {
        [result[parent], result[index]] = [result[index], result[parent]];
        index = parent;
      } else {
        break;
      }
    }
  }
  function down(index) {
    while (2 * index + 1 < k) {
      let child = 2 * index + 1;
      if (child + 1 < k && result[child] < result[child + 1]) {
        child++;
      }
      if (result[index] < result[child]) {
        [result[index], result[child]] = [result[child], result[index]];
        index = child;
      } else {
        break;
      }
    }
  }
  heap();
  return result.sort();
}

module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
