function Solution(arr) {
  // 使用 reduce 方法计算
  var numSum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return numSum;
}
