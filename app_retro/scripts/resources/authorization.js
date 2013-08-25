'use strict';

angular.module('resources.authorization', ['resources.scribden-resource']).factory('Authorization', ['ScribdenResource', '$cookieStore', '$location', function (ScribdenResource, $cookieStore, $location) {

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
		return $http.post(defaultConfig.url + '/signin', {
			email: email,
			password: password
		}).success(function(data) {
			setUser(data.user);
			$location.path('/den');
		}).error(function (data) {
			removeUser();
		});
	};

	Authorization.signUp = function (email) {
		return $http.post(defaultConfig.url + '/signup', {
			email: email
		}).success(function(data) {
			setUser(data.user);
			$location.path('/den');
		}).error(function (data) {
			removeUser();
		});
	};
    
    Authorization.signOut = function () {
		removeUser();
		$location.path('/');
		return $http.get(defaultConfig.url + '/signout');
	};
    
    return Authorization;

}]);
