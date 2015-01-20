'use strict';

angular.module('teamforgeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create-project', {
        templateUrl: 'app/project/create-project/create-project.html',
        controller: 'CreateProjectCtrl',
        authenticate: true
      })
      .when('/view-project', {
        templateUrl: 'app/project/view-project/view-project.html',
        controller: 'ViewProjectCtrl',
        authenticate: true
      })
      .when('/edit-project', {
        templateUrl: 'app/project/edit-project/edit-project.html',
        controller: 'EditProjectCtrl',
        authenticate: true
      });
  });
