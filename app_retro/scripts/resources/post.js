'use strict';
angular.module('resources.post', ['resources.scribden-resource']).factory('Post', ['ScribdenResource', function (ScribdenResource) {

    var Post = ScribdenResource('post');

    return Post;

}]);
