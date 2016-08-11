angular.module('conexs')
.controller('ListSiniestrosCtrl',['$scope','$stateParams','$http','$state','$ionicHistory',function($scope,$stateParams,$http,$state,$ionicHistory){

  $scope.lista = {};
  $scope.back = function(){
    $state.go('polizas');
  }
  var req = {
    method:'get',
    url:'http://192.168.0.8:80/conexs/listSiniestros.php?poliza=' +$stateParams.poliza_id,
    contentType:'aplication/json'
  };

  $http(req).then(function(response){
   //console.log(response.data);
   $scope.lista = response.data;
   console.log($scope.lista);

  },function(err){
    if(err){
      console.log('ocurrió un error :');
      console.log(err);
    }
  })


  $scope.goSiniestro = function(q){
    console.log(q);
    //$state.go('dSiniestro',{id:q});
    //alert('esto debería enviarnos a otra layow');
  };
}]);
