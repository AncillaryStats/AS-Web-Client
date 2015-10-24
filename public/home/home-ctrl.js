(function() {

  'use strict';

  angular
  .module('SportsStats')
  .controller('HomeCtrl', HomeCtrl)

  HomeCtrl.$inject = ['Trending', '$scope'];

  function HomeCtrl(Trending, $scope) {

    Trending.getPlayers()
    .then(function() {
      $scope.trending = Trending.players;
    })
    .catch(function(err) {
      console.error(err);
    })


  }

})();
