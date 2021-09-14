let stack1 = [];
let stack2 = [];
function push(val) {
  stack1.push(val);
}
function pop() {
  if (!stack2.length) {
    while (stack1.length) {
      let val = stack1.pop();
      stack2.push(val);
    }
  }
  let val = stack2.pop();
  return val;
}
module.exports = {
  push: push,
  pop: pop,
};
