// 同学写的
function bpg(s) {
  if (s.length < 1) {
    return "";
  }
  let res = [];
  const postOrder = (root) => {
    if (!root) {
      return;
    }
    if (root.left) {
      postOrder(root.left);
    }
    if (root.right) {
      postOrder(root.right);
    }
    res.push(root.val);
  };

  let tree = constructTree(s);
  postOrder(tree);
  return res.join("");
}

function constructTree(s) {
  if (s.length === 1) {
    return new TreeNode(treeVal(s));
  }
  let sLeft = s.substring(0, s.length / 2);
  let sRight = s.substring(s.length / 2, s.length);
  let node = new TreeNode(
    treeVal(s),
    constructTree(sLeft),
    constructTree(sRight)
  );
  return node;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? "" : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function treeVal(s) {
  let sVal = s.split("").reduce((sum, current) => sum + parseInt(current), 0);
  if (sVal === 0) {
    return "B";
  } else if (sVal === s.length) {
    return "P";
  } else {
    return "G";
  }
}

console.log(bpg("10001101"));
