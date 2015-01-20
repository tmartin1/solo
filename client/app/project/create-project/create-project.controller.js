'use strict';

angular.module('teamforgeApp')
  .controller('CreateProjectCtrl', function ($scope, $http, $location, Auth) {
    
    // Check to make sure a project with the proposed title doesn't already exist.
    $scope.checkTitle = function() {
      $http.get( '/api/projects', {params: {title: $scope.newTitle}} )
        .success(function(projects) {
          alert('A project with that name already exists, please choose a different title.');
        })
        .error(function(error) {
          $scope.createProject();
        });
    };

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
