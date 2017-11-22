angular.module('EH').controller('viewsession', ['$scope','$state','$stateParams','api', function($scope,$state,$stateParams,api) {

  $scope.fetch = function(id) {
    api.getSession(id).then(function(response) {
        $scope.session = angular.copy(response.data);
    });
  };

  var id = $stateParams.id;
  $scope.fetch(id);

}]);
