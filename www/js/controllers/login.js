angular.module('conexs')
.controller('LoginCtrl',['$scope','$http','$state','$document','$cordovaToast',function($scope,$http,$state,$document,$cordovaToast){
	$scope.showModal = function(){
		var modal = document.getElementById('modal');
			modal.classList.add('modal--show');

	}
	$scope.hiddeModal= function(){
		var modal = document.getElementById('modal');
			modal.classList.remove('modal--show');
	}
	$scope.user ={};
	$scope.login = function(){
		var req = {
			method: 'POST',
			url: 'http://api.conexseguros.com/loginapi.php',
			data: {
				cedula: $scope.user.cedula
			}
		};

		$http(req).then(function(response){
			if(response.data.error){
				 $cordovaToast.showShortCenter('usuario no encontrado, por favor verifique sus datos');
			}
			if(response.data.ok){
				window.localStorage['user'] = $scope.user.cedula;
				$state.go('polizas',{},{reload: true});
			}
		},function(error){
			$cordovaToast.showShortBottom('lo sentimos, tenemos problemas con nuestros servidores');
		});
	};
}]);
