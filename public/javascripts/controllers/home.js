angular.module('hashCloud').controller("HomeCtrl", function($scope, $firebaseObject, $http, twitterUser, urls) {
  $scope.tags = [], $scope.tweet = '', $scope.hashIsSearched = false;

  //
  //
  // function($scope, $firebaseObject) {
  //    var ref = new Firebase(urls.firebaseUrl);
  //
  //    var obj = $firebaseObject(ref);
  //
  //    // to take an action after the data loads, use the $loaded() promise
  //    obj.$loaded().then(function() {
  //       console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
  //
  //      // To iterate the key/value pairs of the object, use angular.forEach()
  //      angular.forEach(obj, function(value, key) {
  //         console.log(key, value);
  //      });
  //    });
  //
  //    // To make the data available in the DOM, assign it to $scope
  //    $scope.data = obj;
  //
  //    // For three-way data bindings, bind it to the scope instead
  //    obj.$bindTo($scope, "data");
  // }



  var wordsArr = [];
   $scope.search = function() {
    twitterUser.search($scope.words)
    .success(function(data) {
      console.log(data);
      $scope.data = data;
      wordsArr = $scope.words.split(' ');
      console.log(wordsArr.length);
      $scope.randColor = Please.make_color({
        colors_returned: wordsArr.length
      });
    })
    .catch(function(error) {
      console.log(error);
    });

    return false;
  };

  $scope.follow = function(screenName) {
    twitterUser.follow(screenName)
    .success(function(data) {
      console.log(data);
      $scope.data.users[screenName].following = true;
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  $scope.sendTweet = function() {
    twitterUser.sendTweet($scope.tweet)
    .success(function(resp) {
      $scope.tweet = "";
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + ' ' + tag;
  }


});
