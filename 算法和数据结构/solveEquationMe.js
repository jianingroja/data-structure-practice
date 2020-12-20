//假设方程有解，且书写合法

function solveEquation(str) {
  //*按等号分开
  let arr = str.split("=");
  // console.log(arr);

  //*把 ‘-’ 换成 ‘+-’
  let left = arr[0].replace(/-/g, "+-").split("+");
  let right = arr[1].replace(/-/g, "+-").split("+");

  //*字母移到左边，数字移到右边
  let newLeft = []; //字母
  let newRgiht = []; //数字
  left.forEach((item) =>
    item.includes("x") ? newLeft.push(item) : newRgiht.push("-" + item)
  ); // 移动时变换符号
  right.forEach((item) =>
    item.includes("x") ? newLeft.push("-" + item) : newRgiht.push(item)
  ); // 移动时变换符号

  // console.log(newLeft);
  // console.log(newRgiht);

  //*计算常数
  let newRgiht1 = newRgiht.map(
    (item) => (item.includes("--") ? item.replace(/--/g, "+") : item) //负负为正
  );
  // console.log(newRgiht1);
  let num = newRgiht1.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
  // console.log(num);

  //*计算系数
  newLeft = newLeft.join("").split("x");
  newLeft.pop(); //以 'x' 为基准分割是最后一个为空
  let newLeft1 = newLeft.map((item) =>
    item === "" || item === "-" ? (item += "1") : item
  ); //添加系数1
  // console.log(newLeft1);
  let coEff = newLeft1.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
  // console.log(coEff);
  let result = num % coEff === 0 ? num / coEff : (num / coEff).toFixed(2);

  return `x=${result}`;
}

console.log(solveEquation("x+5-3+x=6+x-2"));
console.log(solveEquation("6+3x=12-3"));
