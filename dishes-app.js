angular.module("myApp", ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);

