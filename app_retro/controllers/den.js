'use strict';

angular.module('den', ['den.manage-common-rooms'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/den', {
                templateUrl: 'views/den/den.html',
                controller: 'DenCtrl',
                requireAuthentication: true
            });
    }])
    .controller('DenCtrl', [ '$scope', '$cookieStore', 'CommonRoom', 'Conversation', function DenCtrl($scope, $cookieStore, CommonRoom, Conversation) {
        $scope.commonRooms = {};
        $scope.user = $cookieStore.get('user');
        
        // get user's common rooms
        CommonRoom.query({
            path: 'userid/' + $scope.user.id,
            isArray: true,
            successCallback: function (result) {
                try {
                    if (result && result.length > 0) {
                        $scope.commonRooms = result;
                        
                        for (var i = 0; i < $scope.commonRooms.length; i++) {
                            $scope.commonRooms[i].DisplayName = '+ ' + $scope.commonRooms[i].Name;
                        }
                    } else {
                        $scope.commonRooms = [];
                    }
                } catch (e) {
                    // error handler here
                    console.log(e);
                }
            }
        });
        
        // load recent conversations on demand
        $scope.loadConversations = function(commonRoom) {
            if (commonRoom.DisplayName.charAt(0) === '+') {
                commonRoom.DisplayName = '-' + commonRoom.DisplayName.substring(1);
                Conversation.query({
                    path: 'common-room/' + commonRoom.CommonRoomKey,
                    isArray: true,
                    successCallback: function(result) {
                        $scope.conversations[commonRoom.Name] = result;            
                    }
                });
            } else {
                // hide conversations
                commonRoom.DisplayName = '+' + commonRoom.DisplayName.substring(1);
            }
        };
    }]);