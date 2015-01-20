'use strict';

angular.module('teamforgeApp')
  .controller('ViewProjectCtrl', function ($scope, $http, $location, Auth) {
    
    var currentUser = Auth.getCurrentUser().name;
    $scope.isOwner = false;

    var getProject = function() {
	    $http.get('/api/projects/'+$location.hash())
	    	.success(function(project) {
	      	$scope.project = project;
          $scope.isOwner = project.ownerName === currentUser;
	    	})
	    	.error(function(error) {
			    console.log('ERROR: ', error);
			  });
    };
    getProject();


    // Allows users to add comments to a project
    $scope.addComment = function() {
    	var comment = {
    		username: currentUser,
    		text: $scope.newComment
    	};
    	getProject();
    	$scope.project.comments.push(comment);
    	console.log($scope.project.comments);
    	$http.put('/api/projects/'+$location.hash(), $scope.project);
    	getProject();
    	$scope.newComment = '';
    };

  });
