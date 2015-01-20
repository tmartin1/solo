'use strict';

angular.module('teamforgeApp')
  .controller('CreateProjectCtrl', function ($scope, $http) {
    
    $scope.createProject = function() {
      $http.post('/api/projects', {
      	title: $scope.newTitle,
      	summary: $scope.newSummary,
      	details: $scope.newDetails,
      	owenerName: 'Owner',
      	_ownerId: 'id'
      });
    };
  });
