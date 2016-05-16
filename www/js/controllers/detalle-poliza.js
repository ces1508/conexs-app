angular.module('conexs')
.controller('DetalleCtrl',['$scope','$state','$stateParams','$http',function($scope,$state,$stateParams,$http){
	$scope.info = {};
	console.log($stateParams.poliza_id);
	var req = {
		url:'http://192.168.0.2:80/conexs/api-poliza.php',
		method: 'POST',
		contentType: 'aplication/json',
		data: {
			poliza: $stateParams.poliza_id
		}

	};

	$http(req).then(function(response){
		console.log(response.data);
		$scope.info = response.data[0];
		console.log($scope.info);
	},function(error){
		console.log(error);

	});

	$scope.sendMail = function(){
		var req= {
			url : 'http://192.168.0.6:80/conexs/send-mail.php',
			method: 'POST',
			data:{
				cedula: $scope.info.cedula_nit,
				poliza: $scope.info.poliza
			}
		};

		$http(req).then(function(response){
			console.log(response.data);
		},function(error){
			console.log('error');
		});
	};

}]);
