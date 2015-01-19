'use strict';

angular.module('teamforgeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project', {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
