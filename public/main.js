(function () {

  'use strict';

  angular.module('SportsStats', [
    'ui.router',
    'ui.bootstrap',
    'ngTagsInput',
    'ngSanitize',
    'SportsStats.config'
    ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl as home'
    })
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
    // .state('api', {
    //   url: '/api',
    //     templateUrl: 'api/api.html',
    //     controller: 'ApiCtrl as api'
    // })
    .state('methods', {
      url: '/api/methods',
        templateUrl: 'api/methods.html',
        // controller: 'MethodsCtrl as methods'
    })
    .state('overview', {
      url: '/api/overview',
        templateUrl: 'api/overview.html',
        // controller: 'ObjectsCtrl as objects'
    })
  }])

  .run


})();
