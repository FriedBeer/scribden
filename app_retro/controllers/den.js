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
    .controller('DenCtrl', [ '$scope', '$cookieStore', '$location', 'CommonRoom', 'Conversation', function DenCtrl($scope, $cookieStore, $location, CommonRoom, Conversation) {
        $scope.commonRooms = {};
        $scope.conversations = [];
        $scope.action = 'den';
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
                            $scope.commonRooms[i].isOpenIcon = '+ ';
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
        
        // switch pages when making a new selection
        $scope.relocate = function() {
            $location.path('/' + $scope.action);
        };
        
        // load recent conversations on demand
        $scope.loadConversations = function(commonRoom) {
            if (commonRoom.isOpenIcon === '+ ') {
                commonRoom.isOpenIcon = '- ';
                Conversation.query({
                    path: 'common-room/' + commonRoom.CommonRoomKey,
                    isArray: true,
                    successCallback: function(result) {
                        $scope.conversations[commonRoom.Name] = result;            
                    }
                });
            } else {
                // hide conversations
                commonRoom.isOpenIcon = '+ ';
            }
        };
    }]);