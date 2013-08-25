'use strict';

angular.module('header')
    .controller('HeaderCtrl', ['$scope', '$location', '$http', 'Authorization', function HeaderCtrl($scope, $location, $http, Authorization) {
        $scope.Authorization = Authorization;
        
        $scope.signOut = function () {
            Authorization.removeUser();
            $location.path('/');
            return Authorization.signOut();
        };
    
    }]);
