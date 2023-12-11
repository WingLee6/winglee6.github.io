function Solution(arr) {
  var evenNumbersList = arr.filter(function (num) {
    return num % 2 === 0;
  });

  return evenNumbersList;
}
  