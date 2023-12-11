function Solution(strInput) {
  // 使用 split 方法将字符串分割成单词数组
  var wordsList = strInput.split(' ');

  // 使用 map 方法反转每个单词
  var reversedWordsList = wordsList.map(function (strWord) {
    return strWord.split('').reverse().join('');
  });

  // 使用 join 方法将反转后的单词数组拼接成字符串
  var reversedString = reversedWordsList.join(' ');

  return reversedString;
}
  