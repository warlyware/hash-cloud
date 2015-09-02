angular.module('hashCloud').controller("HomeCtrl", function($scope, $http, twitterUser, urls) {
  $scope.tags = [], $scope.tweet = '', $scope.hashIsSearched = false;

  var wordsArr = [];
   $scope.search = function() {
    var wordsToCheckForHash = [];
    var wordsWithHashes = [];
    var wordsToSearch = '';
    wordsToCheckForHash = $scope.words.split(' ');
    wordsToCheckForHash.forEach(function(e) {
      if (e.substring(0, 1) !== '#') {
        e = '#' + e;
        wordsWithHashes.push(e);
      } else {
        wordsWithHashes.push(e);
      }
    });
    wordsToSearch = wordsWithHashes.join(' ');


    twitterUser.search(wordsToSearch)
    .success(function(data) {
      $scope.data = data;
      wordsArr = $scope.words.split(' ');
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
      $scope.data.users[screenName].following = true;
    })
    .catch(function(err) {
      console.log(err);
    });
  };

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
  };

  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    $('.parallax').parallax();

  });

});
