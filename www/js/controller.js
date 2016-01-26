app.controller('TeamCtrl', ['$scope', 'TeamService', '$rootScope', function($scope, TeamService, $rootScope) {
  $scope.teams = [];
  $rootScope.team = {};
  $scope.allTeams = function() {
    TeamService.getTeams().then(function(res) {
      // console.log(res.data.teams);
      $scope.teams = res.data.teams;
      // console.log('teams', $scope.teams)
    }, function(err) {
      // console.log(err);
    })
  }

  $scope.getTeam = function(apiUrl) {
    console.log(apiUrl);
    TeamService.getTeam(apiUrl).then(function(res) {
      console.log('response', res);
      $rootScope.team = res.data;
      console.log('The team', $scope.team)
    }, function(err) {
      console.log(err);
    })
  }
}]);
