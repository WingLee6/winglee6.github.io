// 组件 - 返回主页
app.component("navbarComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/navbar/navbar.html',
    bindings:{
        currentQuestionObj: '=',
        htmlCodeInfoObj: '=',
        jsCodeInfoObj: '=',
    },
    controller: function($scope) {
        
        // 题干信息对象
        this.questionDescObj = {
            cssQuestionList: [
                '创建一个完整的响应式网站，包含多个页面，例如首页、关于我们、联系我们等。确保整个网站在不同设备上都有良好的布局和样式。',
                '实现一个带有动画效果的导航菜单，当用户滚动页面时，菜单可以固定在页面顶部，并且在滚动时有过渡效果。',
                '创建一个复杂的表单，包含各种输入元素，如日期选择器、滑块、下拉框等，并使用CSS美化表单元素的样式。',
                '使用CSS绘制一个3D效果的图形，比如一个旋转的立方体或球体。',
                '实现一个带有过渡效果的图片幻灯片，让图片之间可以平滑地过渡。',
                '创建一个带有浮动提示框（Tooltip）的页面，当用户将鼠标悬停在某些元素上时，显示一个提示框。',
                '利用CSS和伪元素（Pseudo-elements）创建一个独特的按钮样式，例如带有特殊图标或动画效果的按钮。',
                '使用CSS Flexbox 或 Grid 布局设计一个复杂的仪表盘界面。',
                '实现一个漂亮的卡片翻转效果，当用户点击卡片时，卡片会翻转显示背面内容。',
                '创建一个具有透明效果的模态框（Modal），点击页面上的某个按钮或链接时，模态框弹出显示，并且背景有半透明遮罩效果。',
            ],
            jsQuestionList: [
                // 下标为0为题目描述, 后面是建议输入参数
                ['编写一个函数，接受一个数字参数n，输出从1到n的所有整数。输入建议: 5', 5],
                ['编写一个函数，接受一个字符串参数，返回字符串的长度。 输入建议: ', 'abcdefg'],
                ['编写一个函数，接受一个数组参数，返回数组中的最大值。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个字符串参数，将字符串中的每个字母转换为大写并返回新字符串。', 'abcdefgH'],
                ['编写一个函数，接受一个数组参数，返回数组中所有元素的和。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个字符串参数，返回字符串中的第一个单词。', 'hello world'],
                ['编写一个函数，接受一个数组参数，返回数组中的最小值。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受两个数字参数，返回它们的乘积。', 1, 3],
                ['编写一个函数，接受一个字符串参数，将字符串中的每个单词的首字母大写并返回新字符串。', 'hello world'],
                ['编写一个函数，接受一个数组参数，返回数组中所有偶数的新数组。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个数组参数，返回数组中所有正数的新数组。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个字符串参数，检查字符串是否是回文字符串（正着读和倒着读都一样）。', 'hello'],
                ['编写一个函数，接受一个数字参数n，输出n个斐波那契数列的元素。', 5],
                ['编写一个函数，接受一个数组参数，返回数组中的所有偶数的平均值。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个字符串参数，检查字符串是否是有效的美国电话号码（格式如：(555) 555-5555）。', '(555) 555-5555'],
                ['编写一个函数，接受一个数组参数，返回数组中的所有负数的绝对值的新数组。', [1, -2, 3, 4, 5]],
                ['编写一个函数，接受一个数字参数n，返回一个包含n个随机整数的新数组。', 5],
                ['编写一个函数，接受一个数组参数，返回数组中的所有奇数的平方的新数组。', [1, 2, 3, 4, 5]],
                ['编写一个函数，接受一个字符串参数，反转字符串中的每个单词并返回新字符串（不反转单词的顺序）。', "Hello World"],
                ['编写一个函数，接受一个数组参数，返回数组中的所有元素之积。', [1, 2, 3, 4, 5]]
            ], 
            demoPagesList: [ 
                ['购物车功能', ['创建一个购物车，能够添加商品、删除商品、计算总价等功能', '实现一个函数用于添加商品到购物车，并计算购物车中商品的总价', '实现一个函数用于删除购物车中的商品', '在页面上显示购物车的内容和总价']], 
                ['单词计数', ['编写一个函数 `countWords(str)`，接受一个字符串参数 `str`', '统计字符串中每个单词出现的次数，并将结果保存在一个对象中', '返回包含单词及对应次数的对象'], ['Hello world, this is a test string.']],
                ['时钟', ['创建一个实时时钟，显示当前时间，并每秒更新一次']], 
                ['图片轮播', ['创建一个包含多张图片URL的数组', '实现一个函数用于自动轮播图片，并设置轮播的时间间隔', '在页面上显示当前轮播的图片，并包含左右箭头用于手动切换图片']],
                ['拖拽效果', ['创建一个元素，使其可拖拽，并通过鼠标拖动该元素到指定位置']]
                ['本地存储', ['创建一个待办事项列表，用户可以添加和删除事项', '使用本地存储(localStorage或sessionStorage)保存数据，以便刷新页面后数据不丢失']], 
                ['密码强度检查', ['编写一个函数 `checkPasswordStrength(password)`，接受一个密码参数 `password`', '根据密码复杂度给出评分，例如弱、中等、强等级，并返回评分结果']],
                ['异步数据请求', ['使用异步函数从一个API获取数据，并将数据显示在页面上']],
                ['模态框', ['创建一个模态框组件，包含一个按钮或链接用于触发弹出模态框', '点击按钮或链接时，弹出模态框显示内容，并包含关闭按钮']],
                ['游戏：猜数字', ['编写一个猜数字游戏，随机生成一个1到100之间的整数', '用户通过输入数字来猜测，给出猜测结果：太大、太小或猜对了', '提示用户猜测次数，直到猜对为止']]
            ]
            
        }





        
        this.$onInit = function() {
            console.log("navbarComponent - onInit")
        }
        
        // 题目选择
        // 适用css题目
        // topicIndex 为题目编号
        // questionIndex 为question编号 
        this.SelectCssQuestionIndex = function (questionIndex) {
            console.log("navbarComponent.SelectQuestionIndex")
            
            // 题号内容
            this.currentQuestionObj.title = 'CSS题目 - question' + questionIndex
            // 题目内容
            this.currentQuestionObj.desc = this.questionDescObj['cssQuestionList'][questionIndex-1]

            // 题目代码实现链接
            this.htmlCodeInfoObj.sourceCodeUrl = './pages/cssAnswer/question' + questionIndex + '/index.html'
            // 设置页面读取标记
            this.htmlCodeInfoObj.readOrNot = false
        }


                
        // 题目选择
        // 适用js题目
        // questionIndex 为question编号 
        this.SelectJSQuestionIndex = function (questionIndex) {
            console.log("navbarComponent.SelectJSQuestionIndex")

            // 题号内容
            this.currentQuestionObj.title = 'JS题目 - question' + questionIndex
            // 题目内容
            this.currentQuestionObj.desc = this.questionDescObj['jsQuestionList'][questionIndex-1][0]


            // 获取题目建议参数
            this.jsCodeInfoObj.demoParam = this.questionDescObj['jsQuestionList'][questionIndex-1].slice(1)
            // 设置页面读取标记
            this.jsCodeInfoObj.readOrNot = false
            // 题目代码实现链接
            this.jsCodeInfoObj.sourceCode = ''
            this.jsCodeInfoObj.sourceCodeUrl = './pages/jsAnswer/question' + questionIndex + '.js'
        }


        // 题目选择
        // 适用示例题目
        // 
        // strTemplateFlag 标记用模板类型 js模板'js' |  html模板'html'
        this.SelectDemoPageQuestionIndex = function (questionIndex, strTemplateFlag) {
            console.log("navbarComponent.SelectDemoPageQuestionIndex")

            // 题号内容
            this.currentQuestionObj.title = '示例题目 - question' + questionIndex + ': ' + this.questionDescObj.demoPagesList[questionIndex-1][0]
            // 题目内容
            this.currentQuestionObj.desc = this.questionDescObj.demoPagesList[questionIndex-1][1].map((item, index) => (index+1) + '. ' + item+';\n').join('')

            
            
            if (strTemplateFlag == 'html') {
                // 题目代码实现链接pages\demoPageAnswer\question1.html
                this.htmlCodeInfoObj.sourceCodeUrl = './pages/demoPageAnswer/question' + questionIndex + '.html'
                // 设置页面读取标记
                this.htmlCodeInfoObj.readOrNot = false
            } else if (strTemplateFlag == 'js') {
                // 获取题目建议参数
                this.jsCodeInfoObj.demoParam = this.questionDescObj.demoPagesList[questionIndex-1][2]
                // 设置页面读取标记
                this.jsCodeInfoObj.readOrNot = false
                // 题目代码实现链接
                this.jsCodeInfoObj.sourceCode = ''
                this.jsCodeInfoObj.sourceCodeUrl = './pages/demoPageAnswer/question' + questionIndex + '.js'
            }
            
        }



    }
    
})