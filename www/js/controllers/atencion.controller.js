angular.module('conexs')
.controller('atencionCtrl',['$scope','$stateParams','$state','$http','$cordovaClipboard','$cordovaToast',function($scope,$stateParams,$state,$http,$cordovaClipboard,$cordovaToast){
  $scope.data={};
  $scope.json={};
  var req = {
    method:'get',
    url:'http://api.conexseguros.com/api-poliza.php?poliza='+$stateParams.id,
  };
  $http(req).then(function(response){
    $scope.json = response.data[0];
    load($scope.json.aseguradora)
  }).catch(function(error){

  })
  function load(aseguradora){
    switch (aseguradora) {
      case 'AIG SEGUROS COLOMBIA S.A':
        $scope.data.phone = '#360';
        break;
        case 'AIG SEGUROS COLOMBIA S.A.':
        $scope.data.phone = '#360';
        break;
      case 'EQUIDAD SEGUROS':
        $scope.data.phone = '#324';
        break;
      case 'EQUIDAD SEGUROS ':
        $scope.data.phone = '#324';
        break
      case 'SEGUROS DEL ESTADO S.A.':
        $scope.data.phone = '#388';
        break;
        case 'ALLIANZ':
          $scope.data.phone ='#265'
          break;
        case 'SEGUROS MUNDIAL':
          $scope.data.phone = false
          break;
        case 'PREVISORA SEGUROS':

          break
        case 'LA PREVISORA S.A.':
          $scope.data.phone = '#345';
          break
        case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
          $scope.data.phone= '#789';
          break;
        case 'MAPFRE SEGUROS COLOMBIA':
          $scope.data.phone = '#624';
          break;
        case 'MAPFRE COLOMBIA':
          $scope.data.phone = '#624';
          break;
        case 'LIBERTY SEGUROS S.A.':
          $scope.data.phone = '#224';
          break;
        case 'ASEGURADORA SOLIDARIA DE SEGUROS':
          break;
        case 'AXA COLPATRIA SEGUROS S.A.':
          $scope.data.phone = '#247'
          break;
        case 'COLPATRIA SEGUROS':
          $scope.data.phone = '#247'
          break;
        case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S.':
          $scope.data.phone = false
          break;
        case 'CONFIANZA':
          $scope.data.phone = false;
          break
        case 'QBE SEGUROS':
          $scope.data.phone = '#723'
          break
      default:
    };
  }
  function toast (text) {
    $cordovaToast.showShortCenter(text).then(function(success) {});
  }
  $scope.copy = function (number) {
  $cordovaClipboard
  .copy(number)
  .then(function () {
    toast(`copiado ${number}`)
  }, function (e) {
    toast('ocurrio un error')
  });

  }
  $scope.back = function(){
    $state.go('PDetalle',{poliza_id:$stateParams.id});
  }
}])
