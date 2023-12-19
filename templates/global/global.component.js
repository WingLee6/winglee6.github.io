// 组件 - 父组件
app.component("globalComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/global/global.html',
    controller: function($scope) {

        this.currentQuestionObj = {
            title: '未选题目',
            desc: '暂无',
            pageUrl: '#',
        };

        this.htmlCodeInfoObj = {
            tipText: '',
            // 源码 或 js文件路径
            sourceCode: '',
            sourceCodeUrl: '#',
            // sourceCodeUrl: './pages/demoPageAnswer/question1.html',
            // 是否被读取
            readOrNot: true
        }

        this.jsCodeInfoObj = {
            tipText: '',
            // 参数输入建议实例, 通过typeof获取参数类型
            demoParam: [],
            // demoParam: [[1, 2, 3], [4, 5, 6]],
            // 源码 或 js文件路径
            sourceCode: '',
            sourceCodeUrl: '#',
            // 是否被读取
            readOrNot: true
        }
        
        
    }
})