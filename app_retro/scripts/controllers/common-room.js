'use strict';
// If using a resolve block, the controller that contains a resolve block cannot be an ng-controller in the html.
// A child controller must be created, and that will get the resolved variables. This controller is what should
// be used as the ng-controller
// require ngSanitize when using ng-bind-html, they go hand-in-hand
angular.module('common-room', ['resources.common-room', 'resources.conversation', 'ngCookies', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/common-room/:commonRoomID', {
                templateUrl: 'views/common-room/common-room.html',
                controller: 'CommonRoomCtrl',
                requireAuthentication: false
            })
            .when('/common-room/:commonRoomID/conversation', {
                templateUrl: 'views/common-room/view-conversations.html',
                controller: 'CommonRoomConversationViewCtrl',
                requireAuthentication: false
            });
    }])
  .controller('CommonRoomCtrl', [ 'CommonRoom', '$scope', '$route', '$cookieStore', function CommonRoomCtrl(CommonRoom, $scope, $route, $cookieStore) {
      $scope.userid = $cookieStore.get('user').id;
      
      CommonRoom.query({
          path: $route.current.params.commonRoomID + '/' + $cookieStore.get('user_id')
      }).then(function(data) {
          $scope.commonRoom = data.result[0];
      });
  }])
  .controller('CommonRoomHomeViewCtrl', [ 'CommonRoom', '$scope', '$cookieStore', function CommonRoomHomeViewCtrl(CommonRoom, $scope, $cookieStore) {
      //$scope.userid = $cookieStore.get('user_id');
  }])
  .controller('CommonRoomConversationViewCtrl', [ 'Conversation', 'CommonRoom', '$scope', '$route', function CommonRoomConversationViewCtrl(Conversation, CommonRoom, $scope, $route) {
      //console.log(conversations);
      $scope.commonRoomID = $route.current.params.commonRoomID;
      Conversation.query({
                    path: 'common-room/' + $route.current.params.commonRoomID
                }).then(function(data) {
                    console.log(data);
                    $scope.conversations = data.result;
                });
  }]);
