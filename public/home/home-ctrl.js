(function() {

  'use strict';

  angular
  .module('SportsStats')
  .controller('HomeCtrl', HomeCtrl)

  HomeCtrl.$inject = ['Trending', '$scope'];

  function HomeCtrl(Trending, $scope) {

    Trending.getPlayers()
    .then(function() {
      console.dir(Trending.players);
      $scope.trending = Trending.players;
    })
    .catch(function(err) {
      console.error(err);
    })


  }

})();
