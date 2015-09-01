'use strict';

angular.module('hashCloud')
.service('FBService', function($state, $firebaseAuth, urls, $rootScope, $window){
  var fb = this;

  this.db = new Firebase(urls.firebaseUrl);

  this.db.onAuth(function(authData) {
    if (authData) {
      fb.currentUser = authData.twitter;
      console.log("Logged in: ", authData);
      setTimeout(function() {
        $rootScope.currentUser = authData.twitter;
        $rootScope.$apply()
      }, 500);
    }
  });

  this.twitterLogout = function() {
    fb.db.unauth();
    // $state.reload();
  };

  this.twitterLogin = function() {
    fb.db.authWithOAuthPopup("twitter", function(error) {
      if (error) {
        console.log("Login Failed!", error);
      }
    });
  };

});
