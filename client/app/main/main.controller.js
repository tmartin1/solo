'use strict';

angular.module('teamforgeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gettingStarted = [
      { name: 'Join a Group', link: '' },
      { name: 'Start a Group', link: '' },
      { name: 'View Projects in Your Group', link: 'home' },
      { name: 'View Public Projects', link: 'home' },
      { name: 'Create a Project', link: 'create-project' },
      { name: 'Review Your Projects', link: '' }
    ];

  });
