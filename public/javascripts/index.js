'use strict';

angular.module('hashCloud', ['firebase', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {url: '/', templateUrl: '/templates/home/home.html', controller: 'HomeCtrl'})
    .state('user', {url: '', templateUrl: '/templates/users/user.html', abstract: true});
    // .state('user.register', {url: '/register', templateUrl: '/templates/users/users.html', controller: 'UsersCtrl'})
    // .state('user.login', {url: '/login', templateUrl: '/templates/users/users.html', controller: 'UsersCtrl'});
  })
  .constant('urls',{
    'apiUrl': '//localhost:8001',
    'firebaseUrl': '//ch-hash-cloud.firebaseio.com/'
  });
