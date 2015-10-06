
angular
  .module('SportsStats')
  .directive('leaderTable', leaderTable);

  function leaderTable() {
    return {
      restrict: 'EA',
      templateUrl: 'leader-tables/components/leader-table.template.html',
      scope: {
        categoryInfo: '=info'
      }
    }

  }
