/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isSameTree(p, q) {
  function traverse(root1, root2) {
    if (root1 === null && root2 === null) {
      return true;
    } else if (root1 !== null && root2 === null) {
      return false;
    } else if (root1 === null && root2 !== null) {
      return false;
    } else {
      return (
        root1.val === root2.val &&
        traverse(root1.left, root2.left) &&
        traverse(root1.right, root2.right)
      );
    }
  }
  return traverse(p, q);
}
