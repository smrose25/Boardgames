angular.module('EH').controller('players', ['$scope','api', function($scope,api) {

  $scope.fetch = function() {
    api.getPlayers().then(function(response) {
        $scope.players = angular.copy(response.data);
    });
  };

  $scope.submit = function() {
    api.newPlayer($scope.newName);
    $scope.newName = "";
    $scope.fetch();
  };

    $scope.fetch();
}]);
