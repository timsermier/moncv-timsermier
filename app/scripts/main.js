$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({speed: 2000});
  
  angular.module("app", ["chart.js"]).controller("RadarCtrl", function ($scope) {
  $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
});
});