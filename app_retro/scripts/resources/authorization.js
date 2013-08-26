'use strict';

angular.module('resources.authorization', ['resources.scribden-resource']).factory('Authorization', ['ScribdenResource', '$cookieStore', '$location', '$http', function (ScribdenResource, $cookieStore, $location, $http) {

    var Authorization = ScribdenResource('auth');

	var user = $cookieStore.get('user');

	Authorization.isSignedIn = function () {
		return !!this.user;
	};

	Authorization.setUser = function (user) {
		this.user = user;
		$cookieStore.put('user', user);
	};

	Authorization.removeUser = function () {
		this.user = null;
		$cookieStore.remove('user');
	};
    
    Authorization.signIn = function (email, password) {
		return $http.post(Authorization.defaultConfig.url + '/signin', {
			email: email,
			password: password
		}).success(function(data) {
			Authorization.setUser(data.user);
			$location.path('/den');
		}).error(function (data) {
			Authorization.removeUser();
		});
	};

	Authorization.signUp = function (email) {
		return $http.post(Authorization.defaultConfig.url + '/signup', {
			email: email
		}).success(function(data) {
			Authorization.setUser(data.user);
			$location.path('/den');
		}).error(function (data) {
			Authorization.removeUser();
		});
	};
    
    Authorization.signOut = function () {
		Authorization.removeUser();
		$location.path('/');
		return $http.get(Authorization.defaultConfig.url + '/signout');
	};
    
    return Authorization;

}]);
