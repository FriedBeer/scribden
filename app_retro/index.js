'use strict';
// define root application
angular.module('ScribdenApp', [
    'ngRoute',
    'resources.authorization',
    'common.interceptor.authentication-interceptor',
    'login',
    'den',
    'common-room',
    'conversation',
    'header'
]).config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push('AuthenticationInterceptor');
    /*
    * "The most interesting capability exposed by both XMLHttpRequest and Access Control is
    * the ability to make "credentialed" requests that are cognizant of HTTP Cookies and 
    * HTTP Authentication information. By default, in cross-site XMLHttpRequest invocations, 
    * browsers will not send credentials.  A specific flag has to be set on the XMLHttpRequest
    * object when it is invoked."
    * See https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS?redirectlocale=en-US&redirectslug=HTTP_access_control#Requests_with_credentials for more details
    */
	$httpProvider.defaults.withCredentials = true;
    
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register', {
            templateUrl: 'views/login/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/den', {
            templateUrl: 'views/den/den.html',
            controller: 'DenCtrl'
        })
        .when('/den/manage-common-rooms', {
            templateUrl: 'views/den/manage-common-rooms/manage-common-rooms.html',
            controller: 'ManageCommonRoomsCtrl'
        })
        .when('/common-room/:commonRoomID', {
            templateUrl: 'common-room/common-room.html',
            controller: 'CommonRoomCtrl'
        })
        .when('/common-room/:commonRoomID/conversation', {
            templateUrl: 'common-room/view-conversations.html',
            controller: 'CommonRoomConversationViewCtrl'
        })
        .when('/conversation/:conversationID', {
            templateUrl: 'views/conversation/conversation.html',
            controller: 'ConversationCtrl'
        })
        .when('/conversation/common-room/:commonRoomID', {
            templateUrl: 'views/conversation/add-conversation.html',
            controller: 'ConversationAddCtrl'
        })
        .otherwise({
            requireAuthentication: false, // define these at each route
            redirectTo: '/login' // replace with 404
        });
}]).constant('API_PATH', {
    baseURL: '/api/v1/'
}).run(['$rootScope', '$location', 'Authorization', function ($rootScope, $location, Authorization) {

	// Register listener to watch route changes.
	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (!Authorization.isSignedIn()) {
            // if the user is a guest and they are trying to access a non-public area, redirect them
			if (!next.redirectTo && next.requireAuthentication) {
				$location.path('/login');
			}
		} else if (next.requireAuthentication) {
            // @TODO
            // Check to see if user is trying to access a common room
            // Check if user is a member of said common room
        }
	});

}]);
