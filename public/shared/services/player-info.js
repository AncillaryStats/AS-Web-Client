(function () {

  angular
    .module('SportsStats')
    .factory('PlayerInfo', PlayerInfo);

  PlayerInfo.$inject = ['$http', '$q', 'EnvConfig'];

  function PlayerInfo($http, $q, EnvConfig){

    var instance = {
      get: get,
      players: []
    };

    return instance;

    // If players do not exist, retrieve
    // Resolve
    function get() {
      var def = $q.defer()
      if (instance.players.length) {
        def.resolve();
      } else {
        // $http.get('http://sports-stats-pro.herokuapp.com/players')
        $http.get(EnvConfig.api + '/players')
        .then(function(res) {
          instance.players = res.data;
          def.resolve();
        }, function(err) {
          def.reject(err)
        })
      }
      return def.promise;
    }


  }

}());
