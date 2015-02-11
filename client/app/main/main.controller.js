'use strict';

angular.module('teamforgeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gettingStarted = [
      { name: 'View Projects', link: 'home' },
      { name: 'Create a Project', link: 'create-project' },
      { name: 'Review Your Projects', link: 'my-projects' }
    ];

  });
