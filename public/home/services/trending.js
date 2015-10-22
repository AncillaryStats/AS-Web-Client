(function () {

  angular
    .module('SportsStats')
    .factory('Trending', Trending);

  Trending.$inject = ['$http', '$q', 'EnvConfig'];

  function Trending($http, $q, EnvConfig){

    var instance = {
      players: [],
      getPlayers: getPlayers
    }

    return instance;

    // Ensures trending players have been retreived
    function getPlayers() {
      var def = $q.defer();
      if (instance.players.length) {
        def.resolve()
      } else {
        $http.get(EnvConfig.api + '/trending')
        .then(function(res) {
          instance.players = _.first(res.data, 15);
          def.resolve();
        }, function(err) {
          def.reject(err);
        });
      }
      return def.promise;
    }

  }

}());
