angular.module('conexs')
.controller('LoginCtrl',['$scope','$http','$state',function($scope,$http,$state){
	//console.o
	$scope.user ={};
	$scope.login = function(){
		var req = {
			method: 'POST',
			url: 'http://192.168.0.8:80/conexs/loginapi.php',
			//url: 'http://192.168.0.8:80/conexs/loginapi.php',
			data: {
				cedula: $scope.user.cedula
			}
		};

		$http(req).then(function(response){
			console.log('bien');
			//console.log(req.data);
			console.log(response.data);
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
