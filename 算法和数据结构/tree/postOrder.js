/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function postOrder(root) {
  const res = [];
  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      traverse(root.right);
      res.push(root.val);
    }
  }
  traverse(root);
  return res;
}
