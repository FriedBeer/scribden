'use strict';
angular.module('resources.authorization', ['resources.scribden-resource']).factory('Authorization', ['ScribdenResource', '$cookieStore', '$location', '$http', function (ScribdenResource, $cookieStore, $location, $http) {

    var Authorization = ScribdenResource('auth');

	var user = $cookieStore.get('user');

	var isSignedIn = function () {
		return !!this.user;
	};

	var setUser = function (user) {
		this.user = user;
		$cookieStore.put('user', user);
	};

	var removeUser = function () {
		this.user = null;
		$cookieStore.remove('user');
	};
    
    var signIn = function (email, password) {
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

	var signUp = function (email) {
		return $http.post(defaultConfig.url + '/signup', {
			email: email
		}).success(function(data) {
			setUser(data.user);
			$location.path('/den');
		}).error(function (data) {
			removeUser();
		});
	};
    
    var signOut = function () {
		removeUser();
		$location.path('/');
		return $http.get(defaultConfig.url + '/signout');
	};
    
    return Authorization;

}]);
