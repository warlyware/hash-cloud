'use strict';

angular.module('hashCloud', ['firebase', 'ui.router', 'cgBusy'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {url: '/', templateUrl: '/templates/home/home.html', controller: 'HomeCtrl'})
    .state('user', {url: '', templateUrl: '/templates/users/user.html', abstract: true});
  })
  .constant('urls',{
    'apiUrl': '//hash-cloud.herokuapp.com',
    'firebaseUrl': '//ch-hash-cloud.firebaseio.com/'
  });
