'use strict';

angular.module('post', ['resources.post', 'ui.tinymce'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/post/conversation/:conversationID', {
                templateUrl: 'views/post/new-post.html',
                controller: 'PostCtrl'
            });
    }])
  .controller('PostCtrl', [ 'Post', '$scope', '$route', '$http', '$cookieStore', '$location', function PostCtrl(Post, $scope, $route, $http, $cookieStore, $location) {
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
                    resize: false,
					max_height: 800,
					min_height: 300,
					height : 300,
                    max_chars: 1200
				};
      
      $scope.form = { userid: $cookieStore.get('user').id, conversationID: $route.current.params.conversationID };
      
      $scope.submit = function() {
          $scope.form.content = $scope.tinymceModel;
          
          Post.insert({
              data: $scope.form,
              successCallback: function(data) {
                  $location.path('/conversation/' + $scope.form.conversationID);
              }
          });
      };
  }]);
