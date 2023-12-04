// 组件 - 返回主页
app.component("navbarComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/navbar/navbar.html',
    bindings:{
        currentQuestionObj: '=',
    },
    controller: function($scope) {
        
        this.questionDescObj = {
            topic3List: [
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
                ]
            
        }
        
        this.$onInit = function() {
            console.log("navbarComponent - onInit")
        }

        // 题目选择
        // topicIndex 为题目编号
        // questionIndex 为question编号 
        this.SelectQuestionIndex = function (topicIndex, questionIndex) {
            console.log("navbarComponent.SelectQuestionIndex")
            this.currentQuestionObj.title = 'Practice1 - 题目' + topicIndex + ' - question' + questionIndex
            this.currentQuestionObj.desc = this.questionDescObj['topic3List'][questionIndex-1]
            this.currentQuestionObj.pageUrl = './pages/topic' + topicIndex + '/question' + questionIndex + '/index.html'

            fetch('./pages/topic' + topicIndex + '/question' + questionIndex + '/index.html')
                .then(response => response.text())
                .then(html => {
                    // document.getElementById('laptop-device-id').innerHTML = html;
                    // document.getElementById('mobile-device-id').innerHTML = html;
                    document.getElementById('source-code-id').innerText = html;
                    this.strSourceCode = html
                })
                .catch(error => console.error('Error fetching source code:', error));
            
            
        }
    }
    
})