'use strict';

/**
 * @ngdoc function
 * @name angularHateoasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHateoasApp
 */
angular.module('angularHateoasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
