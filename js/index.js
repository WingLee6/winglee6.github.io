// 代码格式化高亮
function FormatHightlight(strHtmlCode) {
    // 要高亮的关键词
    var keywordsToHighlight = ['const', 'let', 'var', 'function', 'if', 'else', 'for', 'while', 'console', 'alert', 'return', 'break', 'continue', 'true', 'false', 'null', 'undefined', 'typeof', 'instanceof', 'new', 'extends', 'super', 'this', 'try', 'catch', 'finally', 'throw', 'import', 'export'];
    
    // 遍历关键词，添加高亮样式
    keywordsToHighlight.forEach(function (keyword) {
        var regex = new RegExp('\\b' + keyword + '\\b', 'g');
        strHtmlCode = strHtmlCode.replace(regex, '<span class="highlight">' + keyword + '</span>');
    });
    
    return strHtmlCode
}