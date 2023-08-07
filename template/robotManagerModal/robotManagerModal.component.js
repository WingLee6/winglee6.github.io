// 组件 - 机器人管理模态
app.component("robotManagerModalComponent", {
    templateUrl: './template/robotManagerModal/robotManagerModal.html',
    controllerAs: 'vm',
    require: {
        global: '?^globalComponent' 
    },
    controller: function($scope) {
        this.strInputRobotTypeForSearch = 'CircleRobot'
        this.strInputRobotTypeForAdd = 'CircleRobot'
        this.strInputRobotStockForAdd = 9
        
        this.$onInit = function() {
            console.log('robotManagerModalComponent - onInit')
        }

        this.SearchRobotByType = function() {
            console.log('robotManagerModalComponent - SearchRobotByType')
            this.robotInfoForSearchList = []  
            
            var retSearchRobotByType = this.global.RM.QueryRobotByType(this.strInputRobotTypeForSearch)[this.strInputRobotTypeForSearch]
            
            if (!retSearchRobotByType) {
                alert("未查到此类机器人")
                return
            }
            this.global.robotsOptionsObj[this.strInputRobotTypeForSearch].stock = retSearchRobotByType.stock
            this.robotInfoForSearchList.push(this.global.robotsOptionsObj[this.strInputRobotTypeForSearch])
        }

        this.AddRobotByTypeAndStock = function() {
            console.log('robotManagerModalComponent - AddRobotByTypeAndStock')

            this.robotInfoForAddList = []  

            var retSearchRobotByType = this.global.RM.QueryRobotByType(this.strInputRobotTypeForAdd)[this.strInputRobotTypeForAdd]
    
            var robotObj = new Object()
            if (retSearchRobotByType) {
                // 有该类机器人, 若有执行方法MakedRobot
                robotObj = this.global.RM.MakeRobot(this.strInputRobotTypeForAdd, this.strInputRobotStockForAdd)[this.strInputRobotTypeForAdd]                        
            } else {
                // 若没有该机器人, 去商店注册RegisterRobot
                robotObj = this.global.RM.RegisterRobot(this.strInputRobotTypeForAdd, this.strInputRobotStockForAdd)[this.strInputRobotTypeForAdd]
            }

            if(!robotObj) {
                alert("注册失败，仓库库存不足")
                return
            }
                
            alert("已为您增加" + robotObj.displayName + "库存" + this.strInputRobotStockForAdd + "台, 当前库存为" +  robotObj.stock + "台")

            this.global.robotsOptionsObj[this.strInputRobotTypeForAdd].stock = robotObj.stock
            this.robotInfoForAddList.push(this.global.robotsOptionsObj[this.strInputRobotTypeForAdd])
        }
    }
})