'use strict';

angular.module('teamforgeApp')
  .controller('MyProjectsCtrl', function ($scope, $http, Auth) {
    
    $scope.myProjects = [];

    $http.get( '/api/projects', {params: {ownerName: Auth.getCurrentUser().name}} )
    	.success(function(projects) {
    		$scope.myProjects = projects;
    	})
    	.error(function(error) {
		    console.log('ERROR: ', error);
			});

  });
