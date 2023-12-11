function Solution(arr) {
  var nResult = arr.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  }, 1); // 初始值设为 1，以确保数组为空时也能正确计算

  return nResult;
}
  