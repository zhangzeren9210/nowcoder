/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
function threeOrders(root) {
  // write code here
  let pre = [],
    inlist = [],
    post = [];
  if (root) {
    preOrder(root);
    inOrder(root);
    postOrder(root);
  }
  function preOrder(root) {
    if (!root) return;
    pre.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    inlist.push(root.val);
    inOrder(root.right);
  }
  function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    post.push(root.val);
  }
  return [pre, inlist, post];
}

module.exports = {
  threeOrders: threeOrders,
};
