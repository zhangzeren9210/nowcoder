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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
  // leet 236
  return helper(root, o1, o2).val;
}

function helper(root, o1, o2) {
  if (!root || root.val == o1 || root.val == o2) return root;
  let left = helper(root.left, o1, o2);
  let right = helper(root.right, o1, o2);
  if (!left && !right) return null;
  if (!left) return right;
  if (!right) return left;
  return root;
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
