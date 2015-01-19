'use strict';

angular.module('teamforgeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create-project', {
        templateUrl: 'app/account/project/create-project/create-project.html',
        controller: 'CreateProjectCtrl',
        authenticate: true
      })
      .when('/view-project', {
        templateUrl: 'app/account/project/view-project/view-project.html',
        controller: 'ViewProjectCtrl',
        authenticate: true
      })
      .when('/edit-project', {
        templateUrl: 'app/account/project/edit-project/edit-project.html',
        controller: 'EditProjectCtrl',
        authenticate: true
      });
  });
