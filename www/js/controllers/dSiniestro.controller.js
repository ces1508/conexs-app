angular.module('conexs')
.controller('dSiniestroCtrl',['$scope','$stateParams','$http','$ionicHistory','$state',function($scope,$stateParams,$http,$ionicHistory,$state){

  $scope.siniestro ={};
  $scope.init = function(){
    var req = {
      method:'GET',
      url:'http://api.conexseguros.com/dSiniestro.php?id='+$stateParams.id
    };
    $http(req).then(function(response){
      $scope.siniestro = response.data['0'];
      $scope.siniestro.danios = response.data['0'].daños_materiales;
    },function(err){
    })
  };
  $scope.init();
  $scope.back= function(){{
    $state.go('listSiniestros',{poliza_id:$scope.siniestro.poliza})
  }}
}]);
