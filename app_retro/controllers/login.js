'use strict';
// handles registration, logging in, and session authentication
angular.module('login', ['resources.user', 'resources.authorization', 'ngCookies'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'views/login/register.html',
                controller: 'RegisterCtrl'
            });
    }])
    .controller('LoginCtrl', [ '$scope', 'Authorization', function LoginCtrl($scope, Authorization) {
        $scope.form = { password: 'n/a' };
        // @TODO: Have password field auto-show when email is filled out if a password is set
        $scope.login = function () {
            // authenticate the user and redirect to their den
            Authorization.signIn($scope.form.email, $scope.form.password); // @TODO: Authenticate with password
        };
    } ]);