angular.module('EH').controller('newsession', ['$scope','$state','$stateParams','api', function($scope,$state,$stateParams,api) {

    $scope.fetch = function() {
      api.getAncientOnes().then(function(response) {
          $scope.ancientones = angular.copy(response.data);
      });
      api.getCharacters().then(function(response) {
          $scope.characters = angular.copy(response.data);
      });
      api.getPlayers().then(function(response) {
          $scope.players = angular.copy(response.data);
      });
    };

    $scope.addPlayer = function() {

    };

    $scope.addCharacter = function() {

    };

    $scope.submit = function() {

    };

    $scope.fetch();
}]);
