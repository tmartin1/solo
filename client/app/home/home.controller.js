'use strict';

angular.module('teamforgeApp')
  .controller('HomeCtrl', function ($scope, $http) {
    
    $scope.projects = [];
    
    $http.get('/api/projects')
    	.success(function(projects) {
      	$scope.projects = projects;
    	})
    	.error(function(error) {
		    console.log('ERROR: ', error);
		  });

  });