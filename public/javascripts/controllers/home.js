angular.module('hashCloud').controller("HomeCtrl", function($scope, $http, twitterUser, urls) {
  $scope.tags = [], $scope.tweet = '', $scope.hashIsSearched = false;

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
