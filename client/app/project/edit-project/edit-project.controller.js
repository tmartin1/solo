'use strict';

angular.module('teamforgeApp')
  .controller('EditProjectCtrl', function ($scope, $http, $location, Auth) {

    var currentUser = Auth.getCurrentUser().name;

    var getProject = function(next) {
	    $http.get('/api/projects/'+$location.hash())
	    	.success(function(project) {
	      	$scope.project = project;
          $scope.projectTitle = project.title;
          $scope.projectSummary = project.summary;
          $scope.projectDetails = project.details;
          if (next) next();
	    	})
	    	.error(function(error) {
			    console.log('ERROR: ', error);
			  });
    };
    getProject();

    $scope.checkTitle = function() {
      $http.get( '/api/projects', {params: {title: $scope.projectTitle}} )
        .success(function(project) {
          if (project.length === 0) saveProject();
          else if (project[0].title === $scope.projectTitle) saveProject();
	        else alert('A project with that name already exists, please choose a different title.');
        })
        .error(function(error) {
          console.log('ERROR: ', error);
        });
    };

    // Updates database with saved changes.
	  var saveProject = function() {
      $http({
      	method: 'PUT',
      	url: '/api/projects/'+$location.hash(),
      	params: { id: $scope.project._id },
      	data: {
      		title: $scope.projectTitle,
      		summary: $scope.projectSummary,
      		details: $scope.projectDetails,
      		updated: Date.now
      	}
    	});

  		alert("Project saved.");
	  };

	  // Deletes the project from the database.
	  $scope.deleteProject = function() {
	  	var confirm = prompt("Are you sure you want to permanently delete this project? Enter 'DELETE' to confirm:");
	  	if (confirm !== "DELETE") return;
	  	$http({
	  		method: 'DELETE',
	  		url: '/api/projects/'+$location.hash(),
	  		params: { id: $scope.project._id }
	  	})
	  		.success(function() {
	  			alert("Project deleted.");
	  			$location.path('/home');
	  		})
	  		.error(function(error) {
	  			console.log('ERROR: ', error);
	  		});
	  };

  });
