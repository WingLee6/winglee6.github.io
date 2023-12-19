function Solution(str) {  
    // 将字符串分割成单词数组  
    let wordsList = str.toLowerCase().split(/\s+/)
  
    // 创建一个空对象来保存单词及其出现次数  
    let wordCountObj = {}
  
    // 遍历单词数组  
    for (let i = 0; i < wordsList.length; i++) {  
        // 如果单词已经存在于对象中，增加其计数  
        if (wordCountObj[wordsList[i]]) {  
            wordCountObj[wordsList[i]]++
        } else {  
            // 否则，将单词添加到对象中并设置计数为1  
            wordCountObj[wordsList[i]] = 1
        }  
    }  
  
    // 返回包含单词及其对应次数的对象  
    return wordCountObj
}