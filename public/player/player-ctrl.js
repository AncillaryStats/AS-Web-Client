(function() {

  'use strict';

  angular
  .module('SportsStats')
  .controller('PlayerCtrl', PlayerCtrl)

  PlayerCtrl.$inject = ['$http', '$q', '$scope', 'PlayerInfo', 'PositionStats', '$stateParams'];

  function PlayerCtrl($http, $q, $scope, PlayerInfo, PositionStats, $stateParams) {
    // Get basic player info
    PlayerInfo.get()
    .then(function() {
      var player = _.findWhere(PlayerInfo.players, { name: $stateParams.name });
      $scope.name = player.name;
      $scope.number = player.number;
      $scope.team = player.team;
      $scope.position = player.position
      return PositionStats.getAllGames()
    })
    // Build game stats table
    .then(function() {
      var playerGames = _.where(PositionStats[$scope.position], { player_name: $stateParams.name })
      if ($scope.position === 'QB') {
        $scope.playerTable = createQbTable(playerGames);
      } else if ($scope.position === 'RB') {
        $scope.playerTable = createRbTable(playerGames);
      } else {
        $scope.playerTable = createWrOrTeTable(playerGames);
      }

    });

    var qbHeaders = '<td>Date</td><td>Opp</td><td>Result</td><td>Pass Attempts</td><td>Pass Comps</td><td>Pass Yards</td>' +
    '<td>Completion %</td><td>Yards/Pass</td><td>Pass TDs</td><td>Ints</td>' +
    '<td>QBR</td><td>Passer Rating</td><td>Rush Attempts</td><td>Rush Yards</td><td>Yards/Rush</td>' +
    '<td>Rush TDs</td>';

    var rbHeaders = '<td>Date</td><td>Opp</td><td>Result</td><td>Rush Attempts</td><td>Rush Yards</td><td>Yards/Rush</td><td>Rush TDs</td>' +
    '<td>Reception</td><td>Receiving Yards</td><td>Yards/Rec</td><td>Receiving TDs</td>' +
    '<td>Fumbles</td><td>Fumbles Lost</td>';

    var wrAndTeHeaders = '<td>Date</td><td>Opp</td><td>Result</td><td>Receptions</td><td>Receiving Yards</td><td>Yards/Rec</td>' +
    '<td>Receiving TDs</td><td>Rush Attempts</td><td>Rush Yards</td><td>Yards/Rush</td><td>Rush TDs</td>' +
    '<td>Fumbles</td><td>Fumbles Lost</td>';

    function col(column) {
      return '<td>' + column + '</td>';
    }

    // Create html table that fits either RB stats
    
    function createQbTable(playerGames) {
      var table = '<table id="player-table" class="table table-hover">' + qbHeaders;
      playerGames.forEach(function(game) {
        table += '<tr>' + col(game.date) + col(game.opponent) + col(game.result) + col(game.pass_attempts) +
        col(game.pass_completions) + col(game.pass_yards) + col(game.comp_percentage) +
        col(game.avg_yards_per_pass) + col(game.pass_tds) + col(game.interceptions) + col(game.qb_rating)
        + col(game.passer_rating) + col(game.rush_attempts) + col(game.rush_yards) +
        col(game.avg_yards_per_rush) + col(game.rush_tds) + '</tr>';

      });
      return table;
    }

    // Create html table that fits either RB stats
    function createRbTable(playerGames) {
      var table = '<table id="player-table" class="table table-hover">' + rbHeaders;

      playerGames.forEach(function(game) {
        table += '<tr>' + col(game.date) + col(game.opponent) + col(game.result) + col(game.rush_attempts) +
        col(game.rush_yards) + col(game.avg_yards_per_rush) + col(game.rush_tds) + col(game.receptions) +
        col(game.rec_yards) + col(game.avg_yards_per_rec) + col(game.rec_tds) + col(game.fumbles)
        + col(game.fumbles_lost) + '</tr>';
      });

      return table;
    }

    // Create html table that fits either WR or TE stats
    function createWrOrTeTable(playerGames) {
      var table = '<table id="player-table" class="table table-hover">' + wrAndTeHeaders
      playerGames.forEach(function(game) {
        table += '<tr>' + col(game.date) + col(game.opponent) + col(game.result) +
        col(game.receptions) + col(game.rec_yards) + col(game.avg_yards_per_rec) + col(game.rec_tds) +
        col(game.rush_attempts) + col(game.rush_yards) + col(game.avg_yards_per_rush) + col(game.rush_tds) +
        col(game.fumbles) + col(game.fumbles_lost) + '</tr>';
      });
      return table;
    }



  }

})();
