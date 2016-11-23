angular.module('conexs')
.controller('DetalleCtrl',['$scope','$state','$stateParams','$http','$cordovaClipboard','$cordovaToast',function($scope,$state,$stateParams,$http,$cordovaClipboard,$cordovaToast){
	if (!window.localStorage['user']) {
		$state.go('login')
	}
  $scope.informacion = {};
  $scope.informacion.contenido = false
	$scope.numSiniestros = 'cargando';
	var req = {
	  method:'get',
	  url:'http://api.conexseguros.com/api-poliza.php?poliza='+$stateParams.poliza_id,
	};
		$http(req).then(function(response){
	  	$scope.informacion = response.data[0];
      $scope.informacion.contenido = true
			getNumber($scope.informacion.aseguradora)
		},function(error){
	});
	$scope.getSiniestros = function(){
	  var req = {
	    method:'GET',
	    url:'http://api.conexseguros.com/count_siniestros.php?poliza='+$stateParams.poliza_id
	  };
	  $http(req).then(function(response){
      $scope.numSiniestros = response.data[0]['count(*)']
	  });
	};
	function getNumber(aseguradora){
    switch (aseguradora) {
      case 'AIG SEGUROS COLOMBIA S.A':
        $scope.informacion.phone = '#360';
        break;
        case 'AIG SEGUROS COLOMBIA S.A.':
        $scope.informacion.phone = '#360';
        break;
      case 'EQUIDAD SEGUROS':
        $scope.informacion.phone = '#324';
        break;
      case 'EQUIDAD SEGUROS ':
        $scope.informacion.phone = '#324';
        break
      case 'SEGUROS DEL ESTADO S.A.':
        $scope.informacion.phone = '#388';
        break;
        case 'ALLIANZ':
          $scope.informacion.phone ='#265'
          break;
        case 'SEGUROS MUNDIAL':
          $scope.informacion.phone = false
          break;
        case 'PREVISORA SEGUROS':

          break
        case 'LA PREVISORA S.A.':
          $scope.informacion.phone = '#345';
          break
        case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
          $scope.informacion.phone= '#789';
          break;
        case 'MAPFRE SEGUROS COLOMBIA':
          $scope.informacion.phone = '#624';
          break;
        case 'MAPFRE COLOMBIA':
          $scope.informacion.phone = '#624';
          break;
        case 'LIBERTY SEGUROS S.A.':
          $scope.informacion.phone = '#224';
          break;
        case 'ASEGURADORA SOLIDARIA DE SEGUROS':
          break;
        case 'AXA COLPATRIA SEGUROS S.A.':
          $scope.informacion.phone = '#247'
          break;
        case 'COLPATRIA SEGUROS':
          $scope.informacion.phone = '#247'
          break;
        case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S.':
          $scope.informacion.phone = false
          break;
        case 'CONFIANZA':
          $scope.informacion.phone = false;
          break
        case 'QBE SEGUROS':
          $scope.informacion.phone = '#723'
          break
      default:
    };
  }
	$scope.getSiniestros();
	function toast (text) {
    $cordovaToast.showLongBottom(text).then(function(success) {});
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

	$scope.sendMail = function(){
		$scope.copy($scope.informacion.phone);
	  var req= {
	    url : 'http://api.conexseguros.com/send-mail.php',
	    method: 'POST',
	    data:{
				username: $scope.informacion.titular,
	      cedula: $scope.informacion.cedula_nit,
	      poliza: $scope.informacion.poliza
	    }
	  };

	  $http(req).then(function(response){
	  },function(error){
	  });
	};

	$scope.goPolizas = function(){
		$state.go('listSiniestros',{poliza_id:$stateParams.poliza_id});
	}

}]);
