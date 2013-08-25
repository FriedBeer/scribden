'use strict';

// Documentation for interceptors here: http://docs.angularjs.org/api/ng.$http
angular.module('common.interceptor.authentication-interceptor', ['resources.authorization']).factory('AuthenticationInterceptor', ['$q', '$injector', function ($q, $injector) {
	return {
		response: function (response) {
			// Bypass the success.
			return response;
		},
		responseError: function (response) {
			// Sign out if the user is no longer authorized.
			if (response.status === 401) {
                var authorization = $injector.get('Authorization');
				authorization.signOut();
			}
			
			return $q.reject(response);
		}
	};
}]);