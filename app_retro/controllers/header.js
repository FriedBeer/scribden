'use strict';

angular.module('header', ['resources.authorization'])
    .controller('HeaderCtrl', ['$scope', 'Authorization', function HeaderCtrl($scope, Authorization) {
        console.log('header');
        $scope.Authorization = Authorization;
    }]);
