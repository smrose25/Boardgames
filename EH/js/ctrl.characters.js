angular.module('EH').controller('characters', ['$scope','api', function($scope,api) {

  $scope.fetch = function() {
    api.getCharacters().then(function(response) {
        $scope.characters = angular.copy(response.data);
    });
  };

  $scope.submit = function() {
    api.newCharacter($scope.newName);
    $scope.fetch();
  };

  $scope.fetch();
}]);
