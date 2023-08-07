// 组件 - 侧边栏
app.component("sidebarComponent", {
    templateUrl: './template/sidebar/sidebar.html',
    require: {
        global: '?^globalComponent' 
    },
    controllerAs: 'vm',
    controller: function($scope) {
        this.$onInit = function() {
            console.log("sidebarComponent - onInit")
        }
        
        // 侧边栏-点击测量距离按键
        this.StartLineRobot = function(strMeasureType) {
            console.log("START StartLineRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(LINE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.global.LR.pos.splice(0, this.global.LR.pos.length)
        }

        // 侧边栏-点击测量三点圆半径按键
        this.StartCircleRobot = function(strMeasureType) {        
            console.log("START StartCircleRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(CIRCLE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.global.CR.pos.splice(0, this.global.CR.pos.length)
        }
    }
})