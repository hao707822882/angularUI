/**
 * Created by Administrator on 2015/10/21.
 */
var bootStrapModuleStarter = angular.module("t1", []);
bootStrapModuleStarter.directive("wrapper", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "wrapper.html",
        transclude: true
    }
})

bootStrapModuleStarter.directive("innerwrapper", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "inner.html",
        transclude: true
    }
})