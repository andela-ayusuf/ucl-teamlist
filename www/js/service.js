app.factory('TeamService', ['$http', function($http) {
  var api = 'http://api.football-data.org/v1/soccerseasons/405/';
  return {
    getTeams: function() {
      return $http.get(api + 'teams');
    },
    getTeam: function(apiUrl) {
      return $http.get(apiUrl);
    }
  };

 }]);
