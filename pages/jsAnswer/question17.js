function Solution(n) {
  var resultList = [];

  for (var i = 0; i < n; i++) {
    // 生成一个随机整数，并添加到数组中
    var nRandom = Math.floor(Math.random() * 100); // 生成 0 到 99 的整数
    resultList.push(nRandom);
  }

  return resultList;
}
  