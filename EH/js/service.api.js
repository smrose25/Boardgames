angular.module('EH').service('api',function($http) {
    return {
        getAncientOnes: function() {
            return $http.get('/csp/games/rest/eh/ancientones')
        },
        newAncientOne: function(name) {
            return $http.post('/csp/games/rest/eh/ancientones/' + name)
        },
        getCharacters: function() {
            return $http.get('/csp/games/rest/eh/characters')
        },
        newCharacter: function(name) {
            return $http.post('/csp/games/rest/eh/characters/' + name)
        },
        getPlayers: function() {
            return $http.get('/csp/games/rest/players')
        },
        newPlayer: function(name) {
            return $http.get('/csp/games/rest/players/' + name)
        },
        newSession: function(data) {
            return $http.post('/csp/games/rest/eh/sessions', data)
        },
        getAllSessions: function() {
            return $http.get('/csp/games/rest/eh/sessions')
        },
        getSession: function(id) {
            return $http.get('/csp/games/rest/eh/sessions/' + id)
        }
    };
})
