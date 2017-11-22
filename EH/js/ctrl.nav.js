angular.module('EH').controller('nav', ['$scope','$state', function($scope,$state) {

    $scope.goAncientOnes = function() {
      $state.go('ancientones');
    };

    $scope.goCharacters = function() {
      $state.go('characters');
    };

    $scope.goPlayers = function() {
      $state.go('players');
    };

    $scope.goSessions = function() {
      $state.go('sessions');
    };

}]);
