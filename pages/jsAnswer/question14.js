function Solution(arr) {
  // filter筛选
  var evenNumList = arr.filter(function (num) {
    return num % 2 === 0;
  });

  // reduce 算偶数的和
  var nSum = evenNumList.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  // 计算平均值
  var nAverage = nSum / evenNumList.length;

  return nAverage;
}
  