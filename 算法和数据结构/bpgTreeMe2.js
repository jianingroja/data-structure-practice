function caculateValue(str) {
  if (str.inclues("1") && str.inclues("0")) {
    return "G";
  } else if (str.inclues("0")) {
    return "B";
  } else {
    return "P";
  }
}

function treeNode(val, left, right) {
  this.val = val === undefined ? "" : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTree(str) {
  if (str.length === 1) {
    return new treeNode(caculateValue(str));
  }

  let left = str.substring(0, str.length / 2);
  let right = str.substring(str.length / 2, str.length);
  let node = new treeNode(
    caculateValue(str),
    buildTree(left),
    buildTree(right)
  );

  return node;
}

function bpg(str) {
  if (str.length < 1) {
    return "";
  }

  const postOrder = (root) => {
    let res = [];
    const traverse = (root) => {
      if (root !== null) {
        traverse(root.left);
        traverse(root.right);
        res.push(root.val);
      }
    };
    return traverse(root);
    return res;
  };

  let tree = buildTree(str);
  let result = postOrder(tree);

  return result.join("");
}
