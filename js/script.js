var app = angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function($scope) {
  $scope.form1 = true;
  $scope.form2 = false;

  $scope.goBack = function(){
    $scope.form1 = true;
    $scope.form2 = false;
  }

  $scope.goNext = function(){
    $scope.form1 = false;
    $scope.form2 = true;
  }

});

app.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            elem.bind('blur', function(event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
            });
        }
    };
}]);
