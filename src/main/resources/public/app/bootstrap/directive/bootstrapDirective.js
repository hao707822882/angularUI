/**
 * Created by Administrator on 2016/1/10.
 */
var BootStrapStarter = angular.module("bootstrap", []);

BootStrapStarter.directive("row", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/row.html"
    }
})
BootStrapStarter.directive("col1", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col1.html"
    }
})


BootStrapStarter.directive("col2", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col2.html"
    }
})

BootStrapStarter.directive("col3", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col3.html"
    }
})

BootStrapStarter.directive("col4", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col4.html"
    }
})

BootStrapStarter.directive("col6", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col6.html"
    }
})
BootStrapStarter.directive("col12", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/layer/col12.html"
    }
})

/**
 *文字颜色标签
 */
BootStrapStarter.directive("colorSuccess", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("success")
        }
    }
})
BootStrapStarter.directive("colorInfo", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("info")
        }
    }
})
BootStrapStarter.directive("colorWarning", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("warning")
        }
    }
})
BootStrapStarter.directive("colorDanger", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("danger")
        }
    }
})
/**
 * 可用状态标签
 */
BootStrapStarter.directive("disabled", function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("disabled")
        }
    }
})
/***
 * 背景颜色标签
 */
BootStrapStarter.directive("bgPrimary", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("bg-primary")
        }
    }
})
BootStrapStarter.directive("bgSuccess", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("bg-success")
        }
    }
})
BootStrapStarter.directive("bgDanger", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("bg-danger")
        }
    }
})
BootStrapStarter.directive("bgInfo", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.addClass("bg-info")
        }
    }
})


BootStrapStarter.directive("inline", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {//加载数据
            $element.css("display", "inline-block")
        }
    }
})


BootStrapStarter.directive("tableComponent", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/bootstrap/template/tab/tab.html",
    }
})

/**
 * 排在一行
 */
BootStrapStarter.directive("formInlineHorizontal", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/form/formInlineHorizontal.html"
    }
})

BootStrapStarter.directive("formHorizontal", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/form/formHorizontal.html"
    }
})


BootStrapStarter.directive("inputItem", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            id: "@",
            lab: "@",
            type: "@",
            placeholder: "@"
        },
        templateUrl: "app/bootstrap/template/form/input.html",
    }
})

BootStrapStarter.directive("staticInput", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            id: "@",
            lab: "@"
        },
        templateUrl: "app/bootstrap/template/form/inputStatic.html",
    }
})

BootStrapStarter.directive("btn", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            lab: "@"
        },
        templateUrl: "app/bootstrap/template/form/button.html",
        link: function ($scope, $element, $attrs) {//加载数据
            $element.css("display", "inline-block")
        }
    }
})


BootStrapStarter.directive("img", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            src: "@",
            alt: "@"
        },
        templateUrl: "app/bootstrap/template/other/img.html              "
    }
})


BootStrapStarter.directive("dropdown", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            id: "@",
        },
        templateUrl: "app/bootstrap/template/compent/dropdown/dropDown.html"
    }
})
BootStrapStarter.directive("dropDownItem", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/dropdown/dropDownItem.html"
    }
})


BootStrapStarter.directive("dropDownSeparator", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/dropdown/dropDownSeparator.html"
    }
})


BootStrapStarter.directive("buttonGroupHorizontal", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/buttongroup/buttonGroup.html"
    }
})
BootStrapStarter.directive("buttonGroupVertical", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/buttongroup/buttonGroupVertical.html"
    }
})

BootStrapStarter.directive("inputGroup", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            inputGroupAction: "&"
        },
        templateUrl: "app/bootstrap/template/compent/inputgroup/inputGroup.html"
    }
})


/***
 * 导航栏
 */
BootStrapStarter.directive("navBootStrap", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/nav/nav.html"
    }
})
BootStrapStarter.directive("navHeader", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "lab": "@",
            "href": "@"
        },
        templateUrl: "app/bootstrap/template/compent/nav/navHeader.html"
    }
})
BootStrapStarter.directive("navGeneralItemContainer", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/compent/nav/navGeneralItemContainer.html"
    }
})
BootStrapStarter.directive("navGeneralItem", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "lab": "@",
            "navGeneralItemAction": "&"
        },
        templateUrl: "app/bootstrap/template/compent/nav/navGeneralItem.html"
    }
})

BootStrapStarter.directive("navForm", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "navFormInput": "=",
            "navFormAction": "&",
            "lab": "@"
        },
        templateUrl: "app/bootstrap/template/compent/nav/navForm.html"
    }
})


BootStrapStarter.directive("navListDown", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "lab": "@"
        },
        templateUrl: "app/bootstrap/template/compent/nav/navListDown.html"
    }
})

BootStrapStarter.directive("navLeft", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {
            $element.addClass("navbar-left")
        }
    }
})
BootStrapStarter.directive("navRight", function () {
    return {
        restrict: 'A',
        replace: true,
        link: function ($scope, $element, $attrs) {
            $element.addClass("navbar-right")
        }
    }
})


BootStrapStarter.directive("pagination", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "app/bootstrap/template/compent/pagination/pagination.html",
        link: function ($scope, $element, $attrs) {
            //初始化数据
            $scope.previousOk = false;
            $scope.nextOk = true
        }
    }
})

BootStrapStarter.directive("emblem", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            "num": "&",
        },
        templateUrl: "app/bootstrap/template/emblem/emblem.html",
    }
})

BootStrapStarter.directive("progressBootStrap", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            "width": "@",
        },
        templateUrl: "app/bootstrap/template/progress/progress.html",
    }
})

BootStrapStarter.directive("panel", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "head": "@",
        },
        templateUrl: "app/bootstrap/template/panel/panel.html",
    }
})

BootStrapStarter.directive("panelTable", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/panel/panelTable.html",
    }
})

BootStrapStarter.directive("panelListGroup", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: "app/bootstrap/template/panel/panelListGroup.html",
    }
})

BootStrapStarter.directive("panelListGroupItem", function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            "panelListGroupItemClick": "&",
        },
        templateUrl: "app/bootstrap/template/panel/panelListGroupItem.html",

    }
})

/*BootStrapStarter.directive("tab", function () {
 return {
 restrict: 'E',
 replace: true,
 scope: {},
 templateUrl: "app/bootstrap/template/compent/table/table.html",
 link: function ($scope, $element, $attrs) {

 },
 controller: function ($scope, $element, $attrs) {
 $scope.paginations = ["1", "2", "3", "4", "5", "6"]
 $scope.click = function () {
 alert("controller")
 }
 }
 }
 })*/


