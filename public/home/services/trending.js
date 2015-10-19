(function () {

  angular
    .module('SportsStats')
    .factory('Trending', Trending);

  Trending.$inject = ['$http', '$q'];

  function Trending($http, $q){

    var instance = {
      players: [],
      getPlayers: getPlayers
    }

    return instance;

    // Ensures trending players have been retreived
    function getPlayers() {
      var def = $q.defer();
      if (false) {
        def.resolve()
      } else {
        $http.get('http://localhost:5000/trending')
        // $http.get('http://sports-stats-pro.herokuapp.com/trending')
        .then(function(res) {
          instance.players = res.data;
          def.resolve();
        }, function(err) {
          def.reject(err);
        });
      }
      return def.promise;
    }

  }

}());
