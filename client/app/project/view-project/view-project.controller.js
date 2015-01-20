'use strict';

angular.module('teamforgeApp')
  .controller('ViewProjectCtrl', function ($scope, $http, $location) {
    
    $http.get('/api/projects/'+$location.hash() ).success(function(project) {
      $scope.project = project;
    });

    $scope.test = function() {
    	console.log($scope.project);
    }

  });
