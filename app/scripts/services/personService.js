angular.module('angularHateoasApp').factory('personService', function ($resource) {
    return $resource('', {}, {
        get: {method: 'GET', url:'http://localhost:8080/person/1'}
    });
});