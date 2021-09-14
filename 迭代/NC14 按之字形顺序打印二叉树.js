/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
var Print = function (pRoot) {
  let result = [];
  if (!pRoot) {
    return result;
  }
  let level = 0;
  let queue = [pRoot];
  while (queue.length) {
    let size = queue.length;
    let tmp = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      tmp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (level % 2 === 1) {
      tmp = tmp.reverse();
    }
    level++;
    result.push(tmp);
  }
  return result;
};

module.exports = {
  Print: Print,
};
