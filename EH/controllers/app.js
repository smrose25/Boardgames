
var url = 'http://localhost:57773/csp/games/rest/'
var urlEH = url + 'eh/';

var app = angular.module('EH', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/sessions", {
        templateUrl : "Sessions.htm",
        controller : "sessions"
    })
    .when("/viewsession/:id", {
        templateUrl : "ViewSession.htm",
        controller : "viewsession"
    })
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

app.controller('sessions', function($scope, $http) {

    $scope.fetch = function() {
      $http.get(urlEH + 'sessions').
          then(function(response) {
              $scope.sessions = response.data;
      });
    };

    $scope.submit = function() {

      $scope.fetch();
    };

    $scope.fetch();
});

app.controller('viewsession', function($scope, $http, $routeParams) {

    $scope.fetch = function() {
      $http.get(urlEH + 'sessions/' + $routeParams.id).
          then(function(response) {
              $scope.ancientOne = response.data.ancientOne;
              $scope.date = response.data.date;
              if ($scope.won == 1) {
                $scope.won = 'Yes';
              }
              else {
                $scope.won = 'No';
              }
              $scope.doom = response.data.doom;
              $scope.monsters = response.data.monsters;
              $scope.mysteriessolved = response.data.mysteriessolved;
              $scope.players = response.data.players;
              $scope.characters = response.data.characters;
      });
    };

    $scope.fetch();
});
