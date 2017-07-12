
var url = 'http://localhost:57773/csp/games/rest/'
var urlEH = url + 'eh/';

var app = angular.module('EH', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/ancientones", {
        templateUrl : "AncientOnes.htm",
        controller : "ancientones"
    })
    .when("/players", {
        templateUrl : "Players.htm",
        controller : "players"
    })
    .when("/characters", {
        templateUrl : "Characters.htm",
        controller : "characters"
    });
});


app.controller('ancientones', function($scope, $http) {

    $scope.fetch = function() {
      $http.get(urlEH + 'ancientones').
        then(function(response) {
            $scope.ancientones = response.data;
        });
    };

    $scope.submit = function() {
      $http.post(urlEH + 'ancientones/' + $scope.newName)
      $scope.fetch();
    };

    $scope.fetch();
});

app.controller('characters', function($scope, $http) {

    $scope.fetch = function() {
    $http.get(urlEH + 'characters').
        then(function(response) {
            $scope.characters = response.data;
        });
    };

    $scope.submit = function() {
      $http.post(urlEH + 'characters/' + $scope.newName)
      $scope.fetch();
    };

    $scope.fetch();
});

app.controller('players', function($scope, $http) {

    $scope.fetch = function() {
    $http.get(url + 'players').
        then(function(response) {
            $scope.players = response.data;
        });
    };

    $scope.submit = function() {
      $http.post(url + 'players/' + $scope.newName)
      $scope.fetch();
    };

    $scope.fetch();
});
