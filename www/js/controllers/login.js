angular.module('conexs')
.controller('LoginCtrl',['$scope','$http','$state','$document',function($scope,$http,$state,$document){
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
			//url: 'http://api.conexseguros.com/loginapi.php',
			data: {
				cedula: $scope.user.cedula
			}
		};

		$http(req).then(function(response){
			if(response.data.error){
				alert('Por favor verifique sus datos');
			}
			if(response.data.ok){
				window.localStorage['user'] = $scope.user.cedula;
				$state.go('polizas',{},{reload: true});
			}
		},function(error){
			alert('error :' +  error.data);
		});
	};
}]);
