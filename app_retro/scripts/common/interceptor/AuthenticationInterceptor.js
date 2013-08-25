'use strict';

// Documentation for interceptors here: http://docs.angularjs.org/api/ng.$http
angular.module('common.interceptor.AuthenticationInterceptor', []).factory('AuthenticationInterceptor', ['$q', 'Authorization', function($q, Authorization){
	return {
		response: function (response) {
			// Bypass the success.
			return response;
		},
		responseError: function (response) {
			// Sign out if the user is no longer authorized.
			if (response.status == 401) {
				Authorization.signOut();
			}
			
			return $q.reject(response);
		}
	};
});