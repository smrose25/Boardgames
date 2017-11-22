angular.module('EH').controller('ancientones', ['$scope','api', function($scope,api) {

  $scope.fetch = function() {
    api.getAncientOnes().then(function(response) {
        $scope.ancientones = angular.copy(response.data);
    });
  };

  $scope.submit = function() {
    api.newAncientOne($scope.newName);
    $scope.fetch();
  };

  $scope.fetch();
}]);
