'use strict';

angular.module('den', ['den.manage-common-rooms'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/den', {
                templateUrl: 'views/den/den.html',
                controller: 'DenCtrl'
            });
    }])
    .controller('DenCtrl', [ 'CommonRoom', '$scope', '$cookieStore', function DenCtrl(CommonRoom, $scope, $cookieStore) {
        $scope.commonRooms = {};
        $scope.user = $cookieStore.get('user');
      
        CommonRoom.query({
            path: 'userid/' + $scope.user.id,
            successCallback: function (data) {
                try {
                    if (data.result && data.result.length > 0) {
                        $scope.commonRooms = data.result;
                    } else {
                        $scope.commonRooms = [];
                    }
                } catch (e) {
                    // error handler here
                    console.log(e);
                }
            }
        });
    }]);