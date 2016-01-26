app.controller('TeamCtrl', ['$scope', 'TeamService', '$rootScope', '$location', function($scope, TeamService, $rootScope, $location) {
  $scope.teams = [];
  $rootScope.team = {};
  $rootScope.players = {};
  $rootScope.fixtures = {};
  $rootScope.playerDetails = {};

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
    // console.log(apiUrl);
    TeamService.getTeam(apiUrl).then(function(res) {
      // console.log('response', res);
      $rootScope.team = res.data;
      // console.log('The team', $scope.team)
    }, function(err) {
      // console.log(err);
    })
  }

  $scope.getPlayers = function(apiUrl) {
    TeamService.getPlayers(apiUrl).then(function(res) {
      $rootScope.players = res.data.players;
      $location.url('/players')
      // console.log('yaaaay', res.data);
    }, function(err) {
      console.log(err);
    })
  }

  $scope.getFixtures = function(apiUrl) {
    TeamService.getFixtures(apiUrl).then(function(res) {
      $rootScope.fixtures = res.data.fixtures;
      $location.url('/fixtures')
      // console.log(res);
    }, function(err) {
      console.log(err);
    })
  }
  $scope.getPlayerDetails = function(apiUrl) {
    TeamService.getPlayerDetails(apiUrl).then(function(res) {
      // $rootScope.playerDetails = res.data.players;
      $location.url('/playerdetails')
      console.log('olooooo', res.data);
    }, function(err) {
      console.log(err);
    })
  }

}]);
