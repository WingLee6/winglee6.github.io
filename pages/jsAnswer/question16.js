function Solution(arr) {
  // 使用 map 方法计算负数的绝对值
  var absoluteList = arr.map(function (num) {
    return num < 0 ? Math.abs(num) : num;
  });

  return absoluteList;
}
  