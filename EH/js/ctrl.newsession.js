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

      $scope.count = 0;
      $scope.session = {};
      $scope.session.characters = [];
    };

    $scope.removeCharacter = function() {
      if ($scope.count > 1) {
        $scope.count--;
        $("tr:last-child").remove();
        $scope.session.characters.pop();
      }

    };

    $scope.addCharacter = function() {
      $scope.count++;
      $scope.session.characters.push({'index':$scope.count,'player':'','character':'','survived':'0'});
    };

    $scope.submit = function() {

      var p = [];
      for (var i = 0; i < $scope.session.characters.length; i++) {
        p.push($scope.session.characters[i].player);
      }
      $scope.session.players = Array.from(new Set(p));

      api.newSession($scope.session).then(function(response) {
        $state.go('sessions');
      });

    };

    $scope.fetch();

}]);
