/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型二维数组
 */
 function levelOrder(root) {
    let result = [];
    if(!root)return result;
    let queue = [root];
    while (queue.length) {
      let size = queue.length;
      let tmp = [];
      for (let i = 0; i < size; i++) {
        let node = queue.shift();
        tmp.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(tmp);
    }
    return result;
  }
  module.exports = {
    levelOrder: levelOrder,
  };
  