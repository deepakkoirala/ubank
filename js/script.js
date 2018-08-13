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
