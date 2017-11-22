angular.module('EH').controller('sessions', ['$scope','$state','$stateParams','api', function($scope,$state,$stateParams,api) {

  $scope.fetch = function() {
    api.getAllSessions().then(function(response) {
        $scope.sessions = angular.copy(response.data);
    });
  };

  $scope.viewsession = function(id) {
     $state.go('viewsession',{id:id});
  };
    $scope.fetch();
}]);
