const hasPathSum = (root, sum) => {
  if (root == null) {
    return false; // 遍历到null节点
  }
  if (root.left == null && root.right == null) {
    // 遍历到叶子节点
    return sum - root.val == 0; // 如果满足这个就返回true
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  ); // 大问题转成两个子树的问题
};
