'use strict';

angular.module('hashCloud')
.controller('NavCtrl', function($state, $scope, FBService, urls){



  var db = new Firebase(urls.firebaseUrl);

  db.onAuth(function(authData) {
    if (authData) {
      $scope.currentUser = authData.twitter;
      console.log("Logged in: ", authData);
    }
  });

  $scope.login = function() {
    FBService.twitterLogin();
  };


  $scope.logout = function() {

      db.unauth();
      $scope.currentUser = null;
      // $state.reload();
  };
  $scope.currentUser = FBService.currentUser;

});
