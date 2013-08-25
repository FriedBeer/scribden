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
  .controller('ConversationAddCtrl', [ 'Conversation', 'Post', '$scope', '$route', '$http', '$cookieStore', '$location', function ConversationAddCtrl(Conversation, Post, $scope, $route, $http, $cookieStore, $location) {
      // @TODO: Check submission content for HTML and do clean up on it
      $scope.tinymceModel = tinymce;
      $scope.tinymceOptions = {
					selector: "textarea",
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table contextmenu paste"
					],
					toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
					autosave_ask_before_unload: false,
					max_height: 800,
					min_height: 300,
					height : 300
				};
      
      $scope.form = { userid: $cookieStore.get('user_id') };
      
      $scope.submit = function() {
          $scope.form.content = $scope.tinymceModel;
          $scope.conversationForm = { commonRoomID: $route.current.params.commonRoomID,
                                      isBranch: false,
                                      isClosed: false
          };
          Conversation.insert({
              data: $scope.conversationForm,
              successCallback: function(data) {
                  console.log('conversation inserted');
                  console.log(data);
                  $scope.form.conversationID = data.result[0].ResultKey;
                  console.log($scope.form);
                  Post.insert({
                      data: $scope.form,
                      successCallback: function(data) {
                          console.log('post inserted');
                          console.log(data);
                          $location.path('/common-room/' + $route.current.params.commonRoomID + '/conversation');
                      }
                  });
              }
          });
      };
  }]);
