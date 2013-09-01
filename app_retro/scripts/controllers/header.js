'use strict';

angular.module('header', ['resources.authorization'])
    .controller('HeaderCtrl', ['$scope', 'Authorization', function HeaderCtrl($scope, Authorization) {
        $scope.Authorization = Authorization;
    }]);
