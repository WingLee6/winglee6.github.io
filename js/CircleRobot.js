function CircleRobot() {}

CircleRobot.prototype = Object.create(Robot.prototype)

CircleRobot.prototype.pos = []

// 记录点坐标
// 返回: 录入信息
CircleRobot.prototype.SetPoint = function (x, y) {
    console.log("START CircleRobot.SetPoint - x=" + x + ", y=" + y)

    this.pos.push([x, y])
    return '已录入第' + this.pos.length + '个点, 坐标为[' + x + ', ' + y + ']'  
}

// 判断三点是否都已录入
// 返回: 已录入返回ture, 反之返回false
CircleRobot.prototype.IsAvailable = function (nAvailableNum) {
    console.log("START CircleRobot.IsAvailable - nAvailableNum=" + nAvailableNum)
    if (this.pos.length == nAvailableNum) {
        return true;
    }
    return false;
}

// 计算圆的半径
// 圆在线生成器 https://www.desmos.com/calculator?lang=zh-CN
CircleRobot.prototype.GetState = function () {
    console.log("START CircleRobot.GetState")
    
    // 结合圆的一般方程 x^2 + y^2 + ax + by + c = 0 带入三点求abc
    var strEquation1 = this.pos[0][0] ** 2 + this.pos[0][1] ** 2 + '+' + this.pos[0][0] + '*a+' + this.pos[0][1] + '*b+c=0'
    var strEquation2 = this.pos[1][0] ** 2 + this.pos[1][1] ** 2 + '+' + this.pos[1][0] + '*a+' + this.pos[1][1] + '*b+c=0'
    var strEquation3 = this.pos[2][0] ** 2 + this.pos[2][1] ** 2 + '+' + this.pos[2][0] + '*a+' + this.pos[2][1] + '*b+c=0'
    
    try {
        // 解方程
        var solutionList = nerdamer.solveEquations([strEquation1, strEquation2, strEquation3])
        
        var fCilcleR = 0.5 * Math.sqrt(solutionList[0][1] ** 2 +  solutionList[1][1] ** 2 -  4 * solutionList[2][1])
        var fCirclePosX = -0.5 * solutionList[0][1]
        var fCirclePosY = -0.5 * solutionList[1][1]
        return '圆的半径 r = ' + fCilcleR.toFixed(3) + 'px, 圆心坐标[' + fCirclePosX.toFixed(3) + ', ' + fCirclePosY.toFixed(3) + '], 圆的一般式为 x^2 + y^2 + ' + solutionList[0][1].toFixed(3) + 'x + ' + solutionList[1][1].toFixed(3) + 'y + ' + solutionList[2][1].toFixed(3) + ' = 0'
    } catch(err) {
        if (this.pos[0].toString() == this.pos[1].toString() & this.pos[1].toString() == this.pos[2].toString()) {
            return '点圆, 圆的半径 r = 0px, 圆心坐标[' + this.pos[0][0] + ', ' + this.pos[0][1] + '], 圆的标准方程为 (x - ' + this.pos[0][0] + ')^2 + (y -' + this.pos[0][1] + ')^2 = 0'
        }
        return '虚圆, 输入的三点分别为' + '[' + this.pos[0] + '], ' + '[' + this.pos[1] + '], ' + '[' + this.pos[2] + ']'
    } finally {
        this.pos.splice(0, this.pos.length)
    }
}   

