//  把x移到左边 数值移到右边
// 左边的x的系数直接取用 数值取相反数
// 右边的x的系数取相反数 数值直接取用

function solveEquation(equationStr) {
  let xCount = 0; //系数
  let param = 0; //常数
  let arr = equationStr.split("="); //以等号为分界分开

  function helper(equation, sym) {
    let tempParam = "";
    let symbol = "+";
    let i = 0;
    equation += "+";

    while (equation[i]) {
      let char = equation[i];
      if (char === "x") {
        let temp = parseInt(tempParam || 1); //系数
        tempParam = "";
        symbol === sym ? (xCount += temp) : (xCount -= temp);
      } else if (char === "+" || char === "-") {
        let temp = parseInt(tempParam || 0);
        tempParam = "";
        symbol === sym ? (param -= temp) : (param += temp);
        symbol = char;
      } else {
        tempParam += char;
      }
      ++i;
    }
  }

  helper(arr[0], "+");
  helper(arr[1], "-");
  if (xCount === 0 && param === 0) {
    return "Inifinite solutions";
  }
  if (xCount === 0) {
    return " No solution";
  }
  return `x=${param / xCount}`;
}
