// 组件 - 全局组件
app.component("globalComponent", {
    controllerAs: 'vm',
    templateUrl: './template/global/global.html',
    controller: function($scope, $rootScope) {

        // 通过父子传值
        this.RM = new RobotManager()
        
        // 通过rootScope传值
        $rootScope.robotsOptionsObj = {
            LineRobot: {
                displayName: '线性机器人',
                type: 'LineRobot',
                stock: -1,
                isHidedAndCheckedMeasureBtn: false,     // 侧边栏的操作按钮是否显示 true显示 ｜ false隐藏
            },
            CircleRobot: {
                displayName: '曲线机器人',
                type: 'CircleRobot',
                stock: -1,
                isHidedAndCheckedMeasureBtn: false,     // 侧边栏的操作按钮是否显示 true显示 ｜ false隐藏
            }
        } 

        this.strStateText = SELECT_ROBOT        // 状态栏文本内容
        this.strStateStyle = 'alert-primary'    // 状态栏背景颜色 'alert-success'|'alert-primary'|'alert-danger'
        this.strAnswerText = NO_RESULT          // 结果栏文本
        this.strActiveMeasureState = ''         // 当前激活的测量状态
        
        this.$onInit = function() {
            console.log("sidebarComponent - onInit")
            // 初始化 - 根据机器人库存生成列表
            var retRobotObj = this.RM.QueryRobotType()
            for (var prop in retRobotObj) {
                $rootScope.robotsOptionsObj[prop].stock = retRobotObj[prop].stock
                $rootScope.robotsOptionsObj[prop].isHidedAndCheckedMeasureBtn = retRobotObj[prop].onLine
            }
        }

        // 侧边栏-取消测量按钮
        // isSaveChecked 是否保留侧边栏的激活状态 0 保留 ｜ 1 不保留
        this.CancelMeasurement = function(isSaveChecked) { 
            console.log("START CancelMeasurement - isSaveChecked=" + isSaveChecked)

            if (isSaveChecked) {
                this.strActiveMeasureState = ''
            }

            this.RM.ClearPosRecords()

            if (this.strActiveMeasureState == 'distance' || this.strActiveMeasureState == 'angle') {
                this.ChangeInfoBox(LINE_ROBOT_START_AGAIN, 'alert-danger', NO_RESULT)
            } else if (this.strActiveMeasureState == 'radius') {
                this.ChangeInfoBox(CIRCLE_ROBOT_START_AGAIN, 'alert-danger', NO_RESULT)
            } else {
                this.ChangeInfoBox(SELECT_ROBOT, 'alert-danger', NO_RESULT)
            }
        }

        // 点击事件 - 记录机器人是否激活
        this.RecordOnLine = function(strOnlineBtn) {
            console.log("START RecordOnLine - strOnlineBtn=" + strOnlineBtn)
            
            if (strOnlineBtn == 'isHideMeasureDistanceBtnAndAngleBtn') {
                this.RM.robotObj['LineRobot'].onLine = !this.RM.robotObj['LineRobot'].onLine
            } else if (strOnlineBtn == 'isHideMeasureRadiusBtn') {
                this.RM.robotObj['CircleRobot'].onLine = !this.RM.robotObj['CircleRobot'].onLine
            }
        }

        // 更改提示信息 和 结果信息
        // strStateText状态栏文本内容
        // strStateStyle状态栏背景颜色 'alert-success'|'alert-primary'|'alert-danger'
        // strAnswerText结果栏文本
        this.ChangeInfoBox = function(strStateText, strStateStyle, strAnswerText) {
            this.strStateText = strStateText        
            this.strStateStyle = strStateStyle   
            this.strAnswerText = strAnswerText        
        }
    }
})