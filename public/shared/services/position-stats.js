(function () {

  angular
    .module('SportsStats')
    .factory('PositionStats', PositionStats);

  PositionStats.$inject = ['$http', '$q', 'EnvConfig'];

  function PositionStats($http, $q, EnvConfig){

    var instance = {

      getQbGames: getQbGames,
      getRbGames: getRbGames,
      getWrGames: getWrGames,
      getTeGames: getTeGames,
      getAllGames: getAllGames,
      QB: [],
      RB: [],
      WR: [],
      TE: []
    };

    var posMap = {
        'QB': 'qbs',
        'RB': 'rbs',
        'WR': 'wrs',
        'TE': 'tes'
    }

    return instance;

    function posWrapper(pos) {
      var def = $q.defer();
      if (instance[pos].length) {
        def.resolve()
      } else {
        var endpoint = EnvConfig.api + '/games/' + posMap[pos]
        $http.get(endpoint)
        .then(function(res) {
          console.log(res.data)
          instance[pos] = res.data.result;
          def.resolve();
        }, function(err) {
          def.reject(err);
        });
      }
      return def.promise;
    }

    function getQbGames() {
      return posWrapper('QB')
    }

    function getRbGames() {
      return posWrapper('RB')
    }

    function getWrGames() {
      return posWrapper('WR')
    }

    function getTeGames() {
      return posWrapper('TE')
    }

    function getAllGames() {
      return $q.all([
        getQbGames(),
        getRbGames(),
        getWrGames(),
        getTeGames()
      ])
    }

  }

}());
