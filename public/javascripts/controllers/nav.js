'use strict';

angular.module('hashCloud')
.controller('NavCtrl', function($state, $scope, FBService, urls, $rootScope){



  var db = new Firebase(urls.firebaseUrl);

  db.onAuth(function(authData) {
    if (authData) {
      $rootScope.currentUser = authData.twitter;
    }
  });

  $scope.login = function() {
    FBService.twitterLogin();
  };


  $scope.logout = function() {

      db.unauth();
      $rootScope.currentUser = null;
      // $state.reload();
  };
  $rootScope.currentUser = FBService.currentUser;

});
