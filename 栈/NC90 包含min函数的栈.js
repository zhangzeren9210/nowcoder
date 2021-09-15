let stack = [];
let helper = [];

function push(val) {
  stack.push(val);
  if (!helper.length || val < helper[helper.length - 1]) {
    helper.push(val);
  } else {
    helper.push(helper[helper.length - 1]);
  }
}
function pop() {
  helper.pop();
  stack.pop();
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return helper[helper.length - 1];
}
module.exports = {
  push: push,
  pop: pop,
  top: top,
  min: min,
};
