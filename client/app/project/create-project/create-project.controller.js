'use strict';

angular.module('teamforgeApp')
  .controller('CreateProjectCtrl', function ($scope, $http, Auth, $location) {
    
    $scope.createProject = function() {
      $http.post('/api/projects', {
      	title: $scope.newTitle,
      	summary: $scope.newSummary,
      	details: $scope.newDetails,
      	ownerName: Auth.getCurrentUser().name,
      	_ownerId: Auth.getCurrentUser()._id
      });
      // Redirect user to home page when project is created.
      $location.path('/home');
    };
  });
