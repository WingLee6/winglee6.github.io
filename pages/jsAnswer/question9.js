function Solution(strInput) {
  // split分割
  var wordsList = strInput.split(' ');

  var capitalizedWords = wordsList.map(function (word) {
    // 首字母大写
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // join拼接
  return capitalizedWords.join(' ');
}
  