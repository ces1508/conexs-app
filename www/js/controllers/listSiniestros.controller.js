
angular.module('conexs')
.controller('ListSiniestrosCtrl',['$scope','$stateParams','$http','$state','$ionicHistory',function($scope,$stateParams,$http,$state,$ionicHistory){
  if (!window.localStorage['user']) {
		$state.go('login')
	}
  $scope.lista = {};
  $scope.back = function(){
    $state.go('polizas');
  }
  var req = {
    method:'get',
    url:'http://api.conexseguros.com/listSiniestros.php?poliza=' +$stateParams.poliza_id,
    contentType:'aplication/json'
  };

  $http(req).then(function(response){
    $scope.lista = response.data
  },function(err){
  })
}]);
