angular.module('EH').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("sessions", {
        url : '/',
        templateUrl : "views/Sessions.htm",
        controller : "sessions"
    })
    .state("viewsession", {
        url : "/session/:id",
        templateUrl : "views/ViewSession.htm",
        controller : "viewsession"
    })
    .state("newsession", {
        url : "/newsession",
        templateUrl : "views/NewSession.htm",
        controller : "newsession"
    })
    .state("ancientones", {
        url : "/ancientones",
        templateUrl : "views/AncientOnes.htm",
        controller : "ancientones"
    })
    .state("players", {
        url : "/players",
        templateUrl : "views/Players.htm",
        controller : "players"
    })
    .state("characters", {
        url : "/characters",
        templateUrl : "views/Characters.htm",
        controller : "characters"
    });
    $urlRouterProvider.otherwise('/');
}]);
