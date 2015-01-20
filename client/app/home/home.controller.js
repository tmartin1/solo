'use strict';

angular.module('teamforgeApp')
  .controller('HomeCtrl', function ($scope, $http) {
    
    $scope.projects = [];
    
    $http.get('/api/projects').success(function(projects) {
      $scope.projects = projects;
    });

    $scope.addProject = function() {
      if($scope.newProject === '') {
        return;
      }
      $http.post('/api/projects', { name: $scope.newProject });
      $scope.newProject = '';
    };

    $scope.deleteProject = function(thing) {
      $http.delete('/api/projects/' + thing._id);
    };
  });