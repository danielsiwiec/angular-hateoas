'use strict';

/**
 * @ngdoc function
 * @name angularHateoasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHateoasApp
 */
angular.module('angularHateoasApp')
    .controller('MainCtrl', function ($scope, personService) {
        personService.get().$promise.then(function (person) {
            $scope.person = person;
        });
    });
