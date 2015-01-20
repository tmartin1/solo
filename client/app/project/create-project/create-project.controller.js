'use strict';

angular.module('teamforgeApp')
  .controller('CreateProjectCtrl', function ($scope, $http, $location, Auth) {
    
    // Check to make sure a project with the proposed title doesn't already exist.
    $scope.checkTitle = function() {
      $http.get( '/api/projects', {params: {title: $scope.newTitle}} )
        .success(function(project) {
          console.log(project);
          if (project[0]) alert('A project with that name already exists, please choose a different title.');
          else $scope.createProject();
        })
        .error(function(error) {
          console.log('ERROR: ', error);
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
      // Confirm creation and redirect to home when project is created.
      alert('Project created!');
      $location.path('/home');
    };
  });
