/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  //存储满足条件的path,初始化为空
  const res = [];

  //开始前序遍历
  preOrder(root, sum, []);

  function preOrder(root, target, path) {
    //空树直接返回
    if (!root) {
      return null;
    }

    //当前根节点加入path
    path.push(root.val);

    //更新目标值
    target = target - root.val;

    //目标值为0且是叶子节点，则就是我们要找的path。
    //注意这里传值都用深拷贝，因为当前函数最后一行path.pop()会更新path
    if (target === 0 && !root.left & !root.right) {
      res.push([...path]);
    }

    //前序遍历：根左右
    //注意这里传值都用深拷贝。因为该节点的遍历还在进行，如果引用传值会导致path值混乱
    preOrder(root.left, target, [...path]);
    preOrder(root.right, target, [...path]);

    //当前根节点完全遍历完了，出栈
    path.pop();
  }

  return res;
};
