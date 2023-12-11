function Solution(n) {
  var fibonacciArr = [0, 1];

  for (var i = 2; i < n; i++) {
    var nextNumber = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    fibonacciArr.push(nextNumber);
  }

  return fibonacciArr;
}
  