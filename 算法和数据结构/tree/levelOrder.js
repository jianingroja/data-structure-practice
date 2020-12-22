/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) {
    return res;
  }

  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let len = queue.length;
    let arr = [];
    while (len) {
      //while (len--)
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
    res.push(arr);
  }

  return res;
};
