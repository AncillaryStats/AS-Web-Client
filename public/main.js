(function () {

  'use strict';

  angular.module('SportsStats', [
    'ui.router',
    'ui.bootstrap',
    'ngTagsInput'
    ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/leader-tables');

    $stateProvider

    .state('leader-tables', {
      url: '/leader-tables',
        templateUrl: 'leader-tables/leader-tables.html',
        controller: 'LeaderTablesCtrl as tables'
    })
    .state('players-graph', {
      url: '/players-graph',
        views: {
          '': {
            templateUrl: 'players-graph/layout.html',
            controller: '',
          },
          'graph@players-graph': {
            templateUrl: 'players-graph/players-graph.html',
            controller: 'PlayersGraphCtrl as graph'
          },
          'select@players-graph': {
            templateUrl: 'players-graph/select-players.html',
            controller: 'SelectPlayersCtrl as select'
          }
        }
    })
    .state('player', {
      url: '/player/:name',
        templateUrl: 'player/player.html',
        controller: 'PlayerCtrl as player'
    })
  }])


})();