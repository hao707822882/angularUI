/**
 * Created by Administrator on 2016/1/11.
 */
var bootStrapModuleStarter = angular.module("bootStrapModule", ["bootstrap"]);
bootStrapModuleStarter.service("Util", function ($http) {
    return {
        eval: function (str) {
            return eval("(" + str + ")")
        },
        toArray: function (from, to) {
            var temp = [];
            for (var a = from; a <= to; a++) {
                temp.push(a)
                a++
            }
            return temp
        },
        get: function (url, success, error) {
            $http.get(url).success(success).error(error)
        }
    }
})
bootStrapModuleStarter.directive("tableModule", function ($http, Util) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/bootstrap/module/table/tableModule.html",
            controller: function ($scope, $element, $attrs) {
                function paginations(now, total) {
                    if (total > 10) {
                        if (now == 1) {
                            return Util.toArray(1, 10)
                        } else if (now == total) {
                            return Util.toArray(total - 10, total)
                        } else {
                            if (now - 4 > 0 && now + 5 <= total) {
                                return Util.toArray(now - 4, now + 5)
                            } else if (now - 4 < 0) {
                                return Util.toArray(1, 10)
                            } else if (now + 5 > total) {
                                return Util.toArray(now - 4, total)
                            }
                        }
                    }
                    else {
                        return Util.toArray(1, total)
                    }
                }

                //初始化th数据
                $scope.ths = Util.eval($attrs.ths)
                //判断数据来源
                $scope.url = $attrs.url
                //初始化now
                $scope.now = 1
                //初始化属性名字
                $scope.paramName = Util.eval($attrs.paramname)

                Util.get($scope.url, function (data) {
                    $scope.paginations = paginations(1, data.pages)
                    $scope.trs = data.data
                }, function () {
                    layer.topTip("数据获取失败！")
                })

                $scope.paginationAction = function (data) {
                    console.log(arguments)
                    alert(data)
                }

            }
        }
    }
)