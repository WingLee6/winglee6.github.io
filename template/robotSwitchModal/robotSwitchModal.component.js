// 组件 - 切换机器人模态
app.component("robotSwitchModalComponent", {
    templateUrl: './template/robotSwitchModal/robotSwitchModal.html',
    controllerAs: 'vm',
    require: {
        global: '?^globalComponent' 
    },
    controller: function($scope) {
        // 机器人选项卡信息列表
        // 每个元素包括类型、名称、选中情况，传递而来
        this.robotsInfoList = []     

        this.$onInit = function() {
            console.log("robotSwitchModalComponent - onInit")
            // 根据机器人库存生成列表
            var retRobotObj = this.global.RM.QueryRobotType()
            
            for (var prop in retRobotObj) {
                this.robotsInfoList.push(this.global.robotsOptionsObj[prop])
            }
        }
    }
})