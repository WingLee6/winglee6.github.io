// 组件 - 操作内容
app.component("articleComponent", {
    templateUrl: './template/article/article.html',
    require: {
        global: '?^globalComponent' 
    },
    bindings: {
        gRm: "=",
    },
    controllerAs: 'vm',
    controller: function($scope) {
        this.getGlobalRM
        this.$onInit = function() {
            console.log("articleComponent - onInit")
            this.getGlobalRM = this.gRm
        }

        // 点击测量区域
        this.RecordClickPoint = function(e) {
            console.log("START CLICK - x=" + e.offsetX + ", y=" + e.offsetY)
            if (this.global.strActiveMeasureState == 'distance' || this.global.strActiveMeasureState == 'angle') {
                this.RunLineRobot(e.clientX, e.clientY)
            } else if (this.global.strActiveMeasureState == 'radius') {
                this.RunCircleRobot(e.clientX, e.clientY)
            } else {
                this.global.ChangeInfoBox(SELECT_ROBOT, 'alert-danger', NO_RESULT)
            }
        }

        // 运行距离测量和角度测量对象
        this.RunLineRobot = function(x, y) {
            // function _RunLineRobot(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            this.global.ChangeInfoBox(this.getGlobalRM.LR.SetPoint(x, y), 'alert-primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (this.getGlobalRM.LR.IsAvailable(2)) {
                this.global.ChangeInfoBox(LINE_ROBOT_GOT_P_AND_Q, 'alert-success', this.getGlobalRM.LR.GetState(this.global.strActiveMeasureState))
            }
        }

        // 运行三点测圆半径实例
        this.RunCircleRobot = function(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            this.global.ChangeInfoBox(this.getGlobalRM.CR.SetPoint(x, y), 'alert-primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (this.getGlobalRM.CR.IsAvailable(3)) {
                this.global.ChangeInfoBox(CIRCLE_ROBOT_GOT_P3, 'alert-success', this.getGlobalRM.CR.GetState())
            }
        }
    }
})