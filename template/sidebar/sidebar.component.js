// 组件 - 侧边栏
app.component("sidebarComponent", {
    templateUrl: './template/sidebar/sidebar.html',
    require: {
        global: '?^globalComponent' 
    },
    bindings: {
        gRm: "=",
        // gRobotsOptionsObj: "=",
        // gStrStateText: "=",
        // gStrStateStyle: "=",
        // gStrAnswerText: "=",
        // gStrActiveMeasureState: "="
    },
    controllerAs: 'vm',
    controller: function($scope) {
        this.getGlobalRM
        // this.getGlobalRobotsOptionsObj
        // this.getGlobalStrStateText
        // this.getGlobalStrStateStyle
        // this.getGlobalStrAnswerText          
        // this.getGlobalStrActiveMeasureState

        this.$onInit = function() {
            console.log("sidebarComponent - onInit")
            this.getGlobalRM = this.gRm
            // this.getGlobalRobotsOptionsObj = this.gRobotsOptionsObj
            // this.getGlobalStrStateText = this.gStrStateText
            // this.getGlobalStrStateStyle = this.gStrStateStyle
            // this.getGlobalStrAnswerText = this.gStrAnswerText       
            // this.getGlobalStrActiveMeasureState = this.gStrActiveMeasureState
        }
        
        // 侧边栏-点击测量距离按键
        this.StartLineRobot = function(strMeasureType) {
            console.log("START StartLineRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(LINE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.getGlobalRM.LR.pos.splice(0, this.getGlobalRM.LR.pos.length)
        }

        // 侧边栏-点击测量三点圆半径按键
        this.StartCircleRobot = function(strMeasureType) {        
            console.log("START StartCircleRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(CIRCLE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.getGlobalRM.CR.pos.splice(0, this.getGlobalRM.CR.pos.length)
        }
    }
})