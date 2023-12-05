// 组件 - 答案框组件(含题目框, 演示框和代码框)
app.component("jsAnswerComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/jsAnswer/jsAnswer.html',
    bindings:{
        currentQuestionObj: '=',
    },
    controller: function($scope, $rootScope) {
        // 输入参数内容
        this.inputParam
        // 输出结果
        this.outputResult = '暂无'

        this.$onInit = function() {
            console.log("answerComponent - onInit")
        }

        // 提交参数 
        this.SubmitParameter = function() {

            function loadScript(url) {
                return new Promise((resolve, reject) => {
                    var script = document.createElement('script');
                    script.src = url;
                    script.onload = resolve;  // 当脚本加载完成
                    script.onerror = reject;  // 当脚本加载失败
                    document.body.appendChild(script);
                });
            }
              
            // 使用示例
            loadScript('.'+this.currentQuestionObj.pageUrl)
                .then(() => {
                    this.outputResult = Solvetion(this.inputParam)
                })
                .catch(error => {
                    console.error('Script loading failed:', error);
                });
              
        }
        

        
    }
    
})