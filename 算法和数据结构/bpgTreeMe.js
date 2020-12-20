// ## BPG 树

// ### 描述
// 写一个函数，接受一个长度为 `2^N`（`N >=1`，为整数）的字符串输入，字符串由`{0,1}`构成。通过这个字符串我们可以构建一个 BPG 树，构建方式如下:

// 1. 若这个字符串  既包含 `0` 又包含 `1` 则该节点的值为 `G`；若这个字符串只包含 `0` 则该节点的值为 `B`，若只包含 `1` 则该节点的值为 `P`。
// 1. 构建完当前节点，若当前字符串 `S` 长度为 `1` 则停止构建。否则将 `S` 分为左右相等的两个子串 `S1`、`S2`。按照 1 的方法构建 `S1`、 `S2`，并作为当前节点的左子树和右子树。

// 函数需要返回此二叉树的后续遍历结果字符串。

// ### 示例
// 输入：

//     10001101

// 可构建 BPG 树：

// ![example](https://showmebugimg.dao42.com/uploads/20201106_p8ztqqqa3dc7g0wdpq960gkz5e51cark.png!/fw/800)

// 返回此二叉树的后续遍历结果字符串：

// PBGBBBGPPPBPGGG
// PBGBBBGPPPBPGGG;
// PBGBBBGPPPBPGGG

function bpg(str) {
  if (str.includes("0") && str.includes("1")) {
    return "G";
  } else if (str.includes("0")) {
    return "B";
  } else if (str.includes("1")) {
    return "P";
  }
}

function bpgAdvanced(arr) {
  if (arr[0] === arr[1]) {
    return arr[0];
  } else {
    return "G";
  }
}

// 第一步，所有叶子节点
function one(str) {
  let res = str.split("").map((item) => bpg(item));
  return res;
}

function printTree(str) {
  const height = Math.log2(str.length);
  let leaves = one(str);
  let arr = [[...leaves]];
  //*
  let n = 1;
  //*
  let res = [];

  while (n <= height) {
    let tempArr = [];
    for (let i = 0; i < arr[n - 1].length; i += 2) {
      let temp = arr[n - 1].slice(i, i + 2);
      let tempRes = bpgAdvanced(temp);
      tempArr.push(tempRes);
    }
    arr[n] = tempArr;
    n++;
  }

  //arr now looks like
  /*
  [
    ["P", "B", "B", "B", "P", "P", "B", "P"],
    ["G", "B", "P", "G"],
    ["G", "G"],
    ["G"],
  ];
  */

  // let p0 = 0;
  // let p1 = 0;
  // let p2 = 0;

  // for (let i = 0, n = 0; i < str.length; i++) {
  //   res.push(arr[n][i]);
  //   if ((i + 1) % 2 === 0) {
  //     n++;
  //     if ((i + 1) / 2 === 1) {
  //       res.push(arr[n][0]);
  //     } else if ((i + 1) / 2 === 2) {
  //       res.push(arr[n][1]);
  //       res.push(arr[n + 1][0]);
  //     } else if ((i + 1) / 2 === 3) {
  //       res.push(arr[n][2]);
  //     } else if ((i + 1) / 2 === 4) {
  //       res.push(arr[n][3]);
  //       res.push(arr[n + 1][1]);
  //       res.push(arr[n + 2][0]);
  //     }
  //     n--;
  //   }
  // }

  n = 1;
  while (n <= height) {
    if (n === 1) {
      res = arr[0];
    }

    let upperArr = arr[n];
    let i = upperArr.length - 1;
    let temp = [...res];

    let gap = 0;
    for (let i = 1; i <= n; i++) {
      gap += Math.pow(2, i);
    }

    // console.log(gap);
    // console.log(res.length);

    for (let j = res.length; j >= gap; j -= gap) {
      temp.splice(j, 0, upperArr[i]);
      i--;
    }
    res = [...temp];
    // console.log(temp);
    n++;
  }
  // return arr;
  return res.join("");
}

console.log(printTree("1000110100")); // PBGBBBGPPPBPGGG
// printTree("10001101");
