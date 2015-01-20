'use strict';

angular.module('teamforgeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/my-projects', {
        templateUrl: 'app/my-projects/my-projects.html',
        controller: 'MyProjectsCtrl'
      });
  });
