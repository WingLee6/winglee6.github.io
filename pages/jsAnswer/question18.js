function Solution(arr) {
  var resultList = arr.filter(function (num) {
    return num % 2 !== 0;
  }).map(function (odd) {
    return odd * odd;
  });

  return resultList;
}
  