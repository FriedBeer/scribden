'use strict';
// define root application
angular.module('ScribdenApp', [
    'resources.scribden-resource',
    'resources.user',
    'login',
    'den',
    'common-room',
    'conversation'
]).config(function ($routeProvider) {
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
        .otherwise({
            requireAuthentication: false, // define these at each route
            redirectTo: '/login' // replace with 404
        });
}).constant('API_PATH', {
    baseURL: '/api/v1/'
});
// base url to use when calling the server

app.run(function ($rootScope, $location, AuthenticationModel) {

	// Register listener to watch route changes.
	$rootScope.$on('$routeChangeStart', function (event, next, current) {
		if (!AuthenticationModel.isSignedIn()) {
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

});
