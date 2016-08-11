angular.module('conexs')
.controller('dSiniestroCtrl',['$scope','$stateParams','$http','$ionicHistory','$state',function($scope,$stateParams,$http,$ionicHistory,$state){

  //alert('detalle del sieniestro');
  $scope.siniestro ={};
  $scope.init = function(){
    var req = {
      method:'GET',
      url:'http://192.168.0.8:80/conexs/dSiniestro.php?id='+$stateParams.id
    };
    $http(req).then(function(response){
      console.log(response.data);
      $scope.siniestro = response.data['0'];
      $scope.siniestro.danios = response.data['0'].daños_materiales;
      if(response.data.error){
        console.log('error  :' +  response.data.error);
      }
    },function(err){
      if(err){
        console.log('ocurrió un error');
        console.log(err);
      }
    })
  };
  $scope.init();

  $scope.back= function(){{
    $state.go('listSiniestros',{poliza_id:$scope.siniestro.poliza})
    console.log('vamos pa atras');
  }}
}]);
