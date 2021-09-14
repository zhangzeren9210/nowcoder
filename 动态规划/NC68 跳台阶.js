function jumpFloor(number) {
  let result = [1, 1];
  for (let i = 2; i <= number; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[number];
}
module.exports = {
  jumpFloor: jumpFloor,
};
