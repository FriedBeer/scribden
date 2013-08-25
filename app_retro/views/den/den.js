'use strict';

angular.module('den', ['den.manage-common-rooms'])
     .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/den', {
                templateUrl: 'den/den.html',
                controller: 'DenCtrl'
            });
    }])
    .controller('DenCtrl', [ 'User', 'CommonRoom', '$scope', '$cookieStore', function DenCtrl(User, CommonRoom, $scope, $cookieStore) {
        $scope.commonRooms = {};
        $scope.userid = $cookieStore.get('user_id');
        User.query({
            path: $scope.userid,
            successCallback: function (data) {
                $cookieStore.put('user', data.result[0]);
                $scope.username = data.result[0].Username;
            }
        });
      
        CommonRoom.query({
            path: 'userid/' + $cookieStore.get('user_id'),
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