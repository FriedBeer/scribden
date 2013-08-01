'use strict';

angular.module('conversation', ['resources.conversation', 'resources.post', 'ui.tinymce'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/conversation/:conversationID', {
        templateUrl: 'conversation/conversation.html',
        controller: 'ConversationCtrl'
      })
      .when('/conversation/common-room/:commonRoomID', {
        templateUrl: 'conversation/add-conversation.html',
        controller: 'ConversationAddCtrl'
      })
  }])
  .controller('ConversationCtrl', [ 'Conversation', '$scope', '$cookieStore', function ConversationCtrl(Conversation, $scope, $cookieStore) {
      
  }])
  .controller('ConversationViewCtrl', [ 'Conversation', '$scope', '$cookieStore', function ConversationViewCtrl(Conversation, $scope, $cookieStore) {
      
  }])
  .controller('ConversationAddCtrl', [ 'Post', '$scope', '$route', '$http', '$cookieStore', '$location', function ConversationAddCtrl(Post, $scope, $route, $http, $cookieStore, $location) {
      $scope.tinymceModel = tinymce;
      $scope.form = { userid: $cookieStore.get('userid'),
                      commonRoomID: $route.current.params.commonRoomID
      };
      
      $scope.submit = function() {
          $scope.form.content = $scope.tinymceModel;
          Post.insert({
              data: $scope.form,
              successCallback: function(data) {
                  $location.path('/conversation/common-room/' + $route.current.params.commonRoomID);
              }
          });
      };
  }]);
