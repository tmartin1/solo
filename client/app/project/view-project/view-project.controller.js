'use strict';

angular.module('teamforgeApp')
  .controller('ViewProjectCtrl', function ($scope, $http, $location, Auth) {
    
    var getProject = function() {
	    $http.get('/api/projects/'+$location.hash())
	    	.success(function(project) {
	      	$scope.project = project;
	    	})
	    	.error(function(error) {
			    console.log('ERROR: ', error);
			  });
	  };
	  getProject();

    // Allows users to add comments to a project
    $scope.addComment = function() {
    	var comment = {
    		username: Auth.getCurrentUser().name,
    		text: $scope.newComment
    	};
    	getProject();
    	$scope.project.comments.push(comment);
    	console.log($scope.project.comments);
    	$http.put('/api/projects/'+$location.hash(), $scope.project);
    	getProject();
    	$scope.newComment = '';
    };

    $scope.test = function() {
    	console.log($scope.project.comments);
    };


  });
