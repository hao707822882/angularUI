/**
 * Created by Administrator on 2016/1/11.
 */
var bootStrapModuleStarter = angular.module("bootStrapModule", ["bootstrap"]);

bootStrapModuleStarter.directive("tableModule", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: "app/bootstrap/module/table/tableModule.html",
        controller: function ($scope, $element, $attrs) {
            $scope.head = "表格空间测试"
            $scope.paginations = ["1", "2", "3", "4", "5", "6"]
            $scope.click = function () {
                alert("controller")
            }
        }
    }
})