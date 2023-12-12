// 组件 - 答案框组件(含题目框, 演示框和代码框)
app.component("htmlCodeComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/htmlCode/htmlCode.html',
    bindings:{
        htmlCodeInfoObj: '=',
    },
    controller: function($scope, $rootScope) {
        // 选中桌面端后的参数设置
        this.afterClickLaptop = {
            pageShowIframeStyle: {
                "max-width": "100%"
            },
            activeState: true
        }
        // 选中移动端后的参数设置
        this.afterClickMobile = {
            pageShowIframeStyle: {
                "max-width": "600px"
            },
            activeState: false
        }

        this.$onInit = function() {
            console.log("htmlAnswerComponent - onInit")
        }

        this.$doCheck = function () {
            // 当有新值(进行模板初始化时)
            if (!this.htmlCodeInfoObj.readOrNot && this.htmlCodeInfoObj) {
                // 标记为已读
                this.htmlCodeInfoObj.readOrNot = !this.htmlCodeInfoObj.readOrNot

                // 提示信息处理
                if (this.htmlCodeInfoObj.tipText.length==0) {
                    this.htmlCodeInfoObj.tipText = '无提示信息.'
                }
                

                // 插入js代码到代码框
                fetch(this.htmlCodeInfoObj.sourceCodeUrl)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('source-codeBlock-id').innerText = html
                        // document.getElementById('source-codeBlock-id').innerHTML = FormatHightlight(html)
                    })
                    .catch(error => console.error('Error fetching source code:', error));
                
                // 输出结果归零
                this.strOutputResult = '暂无'
            }
            
        }
        
        // 实现切换到桌面端大小
        this.ClickLaptop = function() {
            this.pageShowIframeStyle = this.afterClickLaptop.pageShowIframeStyle
            this.afterClickMobile.activeState = false
            this.afterClickLaptop.activeState = true
        }
        
        // 实现切换到移动端大小
        this.ClickMobile = function() {
            this.pageShowIframeStyle = this.afterClickMobile.pageShowIframeStyle
            this.afterClickMobile.activeState = true
            this.afterClickLaptop.activeState = false
        }
        

        
    }
    
})