function Solution(password) {

    if (password.length < 6) {
        return "太弱啦, 长度不够"
    }

    // 定义评分标准
    var regexList = [
        /[a-z]/, // 包含小写字母
        /[A-Z]/, // 包含大写字母
        /[0-9]/, // 包含数字
        /[$@!%*?&]/ // 包含特殊字符
    ]

    // 初始化评分
    var nScore = 0

    // 检查密码是否符合每个标准
    for (var i = 0; i < regexList.length; i++) {
        if (regexList[i].test(password)) {
            nScore++
        }
    }

    // 根据评分返回结果
    if (nScore <= 1) {
        return "弱"
    } else if (nScore === 2) {
        return "中等"
    } else if (nScore >= 3) {
        return "强"
    }
}

