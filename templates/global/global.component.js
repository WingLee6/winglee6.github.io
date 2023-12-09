// 组件 - 父组件
app.component("globalComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/global/global.html',
    controller: function($scope) {

        $scope.currentQuestionObj = {
            title: '未选题目',
            desc: '暂无',
            pageUrl: '#',
        };
        
        // 网页模板设置
        $scope.currentPageTemplateObj = {
            isShowedCssAnswerArea: true,
            isShowedJsAnswerArea: false
        }
        
        
    }
})