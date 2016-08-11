angular.module('conexs')
.controller('DetalleCtrl',['$scope','$state','$stateParams','$http','$ionicHistory',function($scope,$state,$stateParams,$http,$ionicHistory){
	$scope.informacion = {};
	$ionicHistory.clearCache();
	$ionicHistory.clearHistory();
	$scope.numSiniestros = 'cargando';
	console.log($stateParams.poliza_id);
	var req = {
	  method:'get',
	  url:'http://192.168.0.8:80/conexs/api-poliza.php?poliza='+$stateParams.poliza_id,
	};
	console.log(req);
	$http(req).then(function(response){
	  console.log(response.data);
	  $scope.informacion = response.data[0];
	  console.log($scope.informacion);
	  switch (response.data[0].aseguradora) {
	    case 'SEGUROS DEL ESTADO S.A.':
	      $scope.informacion.llamar = '#388';
	      break;
	      case 'SEGUROS MUNDIAL':
	        $scope.informacion.llamar =1800051552;
	        break;
	        case 'SEGUROS COMERCIALES BOLIVAR':
	          $scope.informacion.llamar = '#322';
	        break;
	        case 'AIG SEGUROS COLOMBIA S.A.':
	          $scope.informacion.llamar = 8720884;
	        break;
	        case 'ASEGURADORA SOLIDARIA DE COLOMBIA':
	          $scope.informacion.llamar ='#789';
	        break;
	        case 'ALLIANZ':
	          $scope.informacion.llamar = '#265';
	        break;
	        case 'EQUIDAD SEGUROS':
	          $scope.informacion.llamar = '#324';
	        break;
	        case 'LIBERTY SEGUROS S.A.':
	          $scope.informacion.llamar = '#224';
	        break;
	        case 'MAPFRE':
	          $scope.informacion.llamar ='#624';
	        break;
	        case 'MAPFRE COLOMBIA':
	          $scope.informacion.llamar ='#624';
	        break;
	        case 'MAPFRE SEGUROS COLOMBIA':
	          $scope.informacion.llamar =8710923;
	        break;
	        case 'LA PREVISORA S.A.':
	          $scope.informacion.llamar = 8711173;
	        break;
	        case  'PREVISORA SEGUROS':
	          $scope.informacion.llamar = 018000111170;
	        break;
	        case 'AXA COLPATRIA SEGUROS S.A.':
	          $scope.informacion.llammar = 8632979;
	        break;
	        case 'ROYAL & SUN ALLIANCE SEGUROS (COLOMBIA) S.A.S.':
	          $scope.informacion.llamar = 8716414;
	        break;
	        case 'SURA':
	          $scope.informacion.llamar  = 0180000511414;
	        break;
	    }
	},function(error){
	  console.log(error);

	});
	$scope.getSiniestros = function(){
	  var req = {
	    method:'GET',
	    url:'http://192.168.0.8:80/conexs/count_siniestros.php?poliza='+$stateParams.poliza_id
	  };

	  $http(req).then(function(response){

	      $scope.numSiniestros = response.data[0]['count(*)']
				console.log(response);

	  });
	};
	$scope.getSiniestros();
	$scope.sendMail = function(number){
		$scope.call(number);
	  var req= {
	    url : 'http://192.168.0.8:80/conexs/send-mail.php',
	    method: 'POST',
	    data:{
	      cedula: $scope.informacion.cedula_nit,
	      poliza: $scope.informacion.poliza
	    }
	  };

	  $http(req).then(function(response){
	    console.log(response.data);
	  },function(error){
	    console.log('error');
	  });
	};

$scope.goPolizas = function(){
	$state.go('listSiniestros',{poliza_id:$stateParams.poliza_id});
}
$scope.call = function(number) {
	document.location.href = 'tel:' + number;
}
}]);
