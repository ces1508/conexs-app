var prueba;
angular.module('conexs')
.controller('PerfilCtrl',['$scope','$http','$state',function($scope,$http,$state){

	console.log('controlador de perfil');
	$scope.init = function(){

		var req= {
			url:'http://192.168.0.8:80/conexs/api-perfil.php',
			method: 'POST',
			data: {
				cedula: window.localStorage['user']
			}
		};

		$http(req).then(function(response){
			console.log(response.data);
			prueba = response.data;
			$scope.perfil = response.data[0];
			$scope.perfil.num_polizas = response.data.length;
			$scope.perfil.pol_activas = 0;
			$scope.perfil.pol_inactivas= 0;
			for  (i = 0; i < response.data.length; i++){
				if (response.data[i].estado === "ACTIVO"){
					$scope.perfil.pol_activas += 1;
				}
				if (response.data[i].estado === 'INACTIVO'){
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
	$scope.salir = function(){
		localStorage.removeItem('user');
		$state.go('login');
	};
}]);
