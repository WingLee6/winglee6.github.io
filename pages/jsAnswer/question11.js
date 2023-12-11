function Solution(arr) {
  var positiveNumbersList = arr.filter(function (num) {
    return num > 0;
  });

  return positiveNumbersList;
}
  