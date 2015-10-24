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

    // If players have not been retrieved yet, GET and resolve
    function get() {
      var def = $q.defer()
      if (instance.players.length) {
        def.resolve();
      } else {
        $http.get(EnvConfig.api + '/players')
        .then(function(res) {
          instance.players = res.data.result;
          def.resolve();
        }, function(err) {
          def.reject(err)
        })
      }
      return def.promise;
    }


  }

}());
