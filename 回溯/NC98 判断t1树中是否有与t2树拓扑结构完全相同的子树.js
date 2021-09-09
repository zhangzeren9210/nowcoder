/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root1 TreeNode类
 * @param root2 TreeNode类
 * @return bool布尔型
 */
function isContains(root1, root2) {
  if (!root1) return false;
  if (isEqual(root1, root2)) return true;
  return isContains(root1.left, root2) || isContains(root1.right, root2);
}
function isEqual(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}
module.exports = {
  isContains: isContains,
};
