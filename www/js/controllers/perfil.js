var prueba;
angular.module('conexs')
.controller('PerfilCtrl',['$scope','$http','$state',function($scope,$http,$state){

	console.log('controlador de perfil');
	$scope.init = function(){

		var req= {
			url:'http://192.168.0.3:80/conexs/api-perfil.php',
			method: 'POST',
			data: {
				cedula: window.localStorage['user']
			}
		};

		$http(req).then(function(response){
			//console.log(response.data);
			prueba = response.data;
			$scope.perfil = response.data[0];
			$scope.perfil.num_polizas = response.data.length;
			$scope.perfil.pol_activas = 0;
			$scope.perfil.pol_inactivas= 0; 
			for  (i = 0; i < response.data.length; i++){
				console.log('for');
				//console.log(response.data[0].estado);
				if (response.data[i].estado === "ACTIVO"){
					// alert();
					$scope.perfil.pol_activas += 1; 
					console.log('activo');
				}
				if (response.data[i].estado === 'INACTIVO'){
					console.log('INACTIVO');
					$scope.perfil.pol_inactivas += 1; 
				}

			}
			console.log($scope.perfil);
		},function(error){
			console.log('error');
			console.log(error);
		});
	};

	$scope.init();
}]);