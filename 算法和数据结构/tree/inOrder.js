/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function inOrder(root) {
  const res = [];
  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      res.push(root.val);
      traverse(root.right);
    }
  }
  traverse(root);
  return res;
}
