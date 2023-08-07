var app = angular.module('mainApp', [])

// #region 过滤器
// 过滤器 - 列表样式 有库存可选 ''｜ 无库存不可选灰色 'bg-light'
app.filter('disabledStyleFilter', function() { 
    return function(text) {
        if (text <= 0) {
            return 'bg-light'
        } else {
            return ''
        }
    }
})

// 过滤器 - 是否可选 有库存可选 'false'｜ 无库存不可选灰色 'true'
app.filter('isDisabledFilter', function() { 
    return function(text) {
        return text <= 0
    }
})
// #endregion
        