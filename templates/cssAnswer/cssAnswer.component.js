// 组件 - 答案框组件(含题目框, 演示框和代码框)
app.component("cssAnswerComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/cssAnswer/cssAnswer.html',
    bindings:{
        currentQuestionObj: '=',
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
            console.log("answerComponent - onInit")
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