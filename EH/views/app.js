var app = angular.module('EH', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/ancientones", {
        templateUrl : "AncientOnes.htm",
        controller : "ancientones"
    })
    .when("/characters", {
        templateUrl : "Characters.htm",
        controller : "characters"
    });
});


app.controller('ancientones', function($scope, $http) {
    $http.get('http://localhost:57773/csp/games/rest/eh/ancientones').
        then(function(response) {
            $scope.ancientones = response.data;
        });
});

app.controller('characters', function($scope, $http) {
    $http.get('http://localhost:57773/csp/games/rest/eh/characters').
        then(function(response) {
            $scope.characters = response.data;
        });
});
