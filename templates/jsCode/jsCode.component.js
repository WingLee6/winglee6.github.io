// 组件 - 答案框组件(含题目框, 演示框和代码框)
app.component("jsCodeComponent", {
    controllerAs: 'vm',
    templateUrl: './templates/jsCode/jsCode.html',
    bindings: {
        jsCodeInfoObj: '<',
    },
    controller: function ($scope, $rootScope) {
        // 输出结果
        this.strOutputResult = '暂无'
        // 记录下参数的数据类型, 即使改变输入变量也可以用此完成参数类型校验
        this.recordParamTypeList = []

        this.$onInit = function () {
            console.log("jsCodeComponent - onInit")
            this.jsCodeInfoObj.tipText = '无提示信息.'
        }

        this.$doCheck = function () {
            // 当有新值(进行模板初始化时)
            if (!this.jsCodeInfoObj.readOrNot && this.jsCodeInfoObj && this.jsCodeInfoObj.demoParam) {
                // 标记为已读
                this.jsCodeInfoObj.readOrNot = !this.jsCodeInfoObj.readOrNot

                // 提示信息处理
                if (this.jsCodeInfoObj.tipText.length!=0) {
                    this.jsCodeInfoObj.tipText = this.jsCodeInfoObj.tipText
                } else if (this.jsCodeInfoObj.demoParam.length==0) {
                    this.jsCodeInfoObj.tipText = '没有参数需要输入.'
                }
                
                // 结果需要字符化JSON.stringify， 否则数组在前端不显示[]
                this.jsCodeInfoObj.demoParam = this.jsCodeInfoObj.demoParam.map(arr => JSON.stringify(arr))

                // 记录下参数的数据类型, 即使改变输入变量也可以用此完成参数类型校验
                this.recordParamTypeList = angular.copy(this.jsCodeInfoObj.demoParam.map(item => typeof item))
                // this.formattedJsInfoObj.inputParamToString = angular.copy(this.jsCodeInfoObj.demoParam.map(arr => JSON.stringify(arr)))

                // 插入js代码到代码框
                fetch(this.jsCodeInfoObj.sourceCodeUrl)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('source-codeBlock-id').innerHTML = FormatHightlight(html)
                    })
                    .catch(error => console.error('Error fetching source code:', error));
                
                // 输出结果归零
                this.strOutputResult = '暂无'
            }
        }

        // 提交参数 
        this.SubmitParameter = function () {
            try {
                // 输入内容进行格式化
                this.paramsList = FormatParameter(this.jsCodeInfoObj.demoParam, this.recordParamTypeList)
                // 使用示例
                this.LoadScript('.' + this.jsCodeInfoObj.sourceCodeUrl)
                    .then(() => {
                        
                        switch (this.paramsList.length) {
                            case 1:
                                this.strOutputResult = JSON.stringify(Solution(this.paramsList[0]))
                                // 结果需要字符化JSON.stringify， 否则数组在前端不显示[]
                                break;
                            case 2:
                                this.strOutputResult = JSON.stringify(Solution(this.paramsList[0], this.paramsList[1]))
                                break;
                            case 3:
                                this.strOutputResult = JSON.stringify(Solution(this.paramsList[0], this.paramsList[1], this.paramsList[2]))
                                break;
                            case 4:
                                this.strOutputResult = JSON.stringify(Solution(this.paramsList[0], this.paramsList[1], this.paramsList[2], this.paramsList[3]))
                                break;
                            default:
                                alert('参数超限(>4个), 需该代码')
                        }
                
                        // console.log(this.strOutputResult)
                        $scope.$apply();
                    })
                    .catch(error => {
                        console.error('Script loading failed:', error);
                    });
            } catch (error) {
                this.strOutputResult = "捕获到错误:\n" + error
            }
            

            
        }

        // 加载js文件
        this.LoadScript = function (url) {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                script.src = url;
                script.onload = resolve;  // 当脚本加载完成
                script.onerror = reject;  // 当脚本加载失败
                document.body.appendChild(script);
            });
        }

        // 格式化 
        function FormatParameter(originalList, targetList) {

            // 确保两个数组长度一致
            if (originalList.length !== targetList.length) {
                console.error('数组长度不一致');
                return;
            }
            const formattedList = [];
            for (let i = 0; i < originalList.length; i++) {
                const targetType = targetList[i];

                switch (targetType) {
                    case 'string':
                        formattedList.push(originalList[i].length==0 ? '':JSON.parse(originalList[i]));
                        break;
                    case 'number':
                        formattedList.push(Number(originalList[i]));
                        break;
                    case 'object':
                        if (typeof (originalList[i]) == 'object') {
                            formattedList.push(originalList[i]);
                        } else {
                            formattedList.push(originalList[i].length==0 ? []:JSON.parse(originalList[i]));
                        }
                        break;
                    default:
                        // 如果目标类型不是已知类型，直接保留原值
                        formattedList.push(originalList[i]);
                }
            }

            return formattedList;
        }


    }

})