/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// leetcode 剑指 Offer 07. 重建二叉树
function reConstructBinaryTree(pre, vin) {
  // preIndex表示在先序中的根索引
  // left中序的左边界
  // right中序的右边界
  function helper(preIndex, left, right) {
    if (left > right) return null;
    // 中序的根索引
    let in_root_index = vin.indexOf(pre[preIndex]);
    let root = new TreeNode(pre[preIndex]);
    root.left = helper(preIndex + 1, left, in_root_index - 1);
    root.right = helper(
      preIndex + (in_root_index - 1 - left + 1) + 1,
      in_root_index + 1,
      right
    );
    return root;
  }
  return helper(0, 0, pre.length - 1);
}

module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
