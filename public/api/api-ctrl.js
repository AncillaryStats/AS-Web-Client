(function() {

  'use strict';

  angular
  .module('SportsStats')
  .controller('ApiCtrl', ApiCtrl)

  ApiCtrl.$inject = ['$http', '$q', '$scope', 'PositionLeaders'];

  function ApiCtrl($http, $q, $scope, PositionLeaders) {

  }

})()
