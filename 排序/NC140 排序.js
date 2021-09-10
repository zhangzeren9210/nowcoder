function MySort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.splice(arr.length >> 1, 1)[0],
    left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return MySort(left).concat([mid], MySort(right));
}
