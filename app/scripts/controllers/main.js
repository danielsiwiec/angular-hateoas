'use strict';

/**
 * @ngdoc function
 * @name angularHateoasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHateoasApp
 */
angular.module('angularHateoasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
