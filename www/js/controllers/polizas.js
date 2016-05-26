angular.module('conexs')
.controller('PolizasCtrl',['$scope','$state','$http','pushNotifications',function($scope,$state,$http,pushNotifications){

	$scope.init = function(){
		if(window.localStorage['regid']){
			pushNotifications.sendDeviceinfo(window.localStorage['user']);
		}
		$scope.list = {};
		var req = {
			url: 'http://192.168.0.4:80/conexs/list-polizas.php',
			method: 'POST',
			data: {
				user: window.localStorage['user']
			}
		};
		console.log(window.localStorage['user']);
		$http(req).then(function(response){
			console.log(response.data);
			console.log('peticion exitosa');
			$scope.list = response.data;
			console.log($scope.list);
		},function(error){

		});
	};

	$scope.init();

}]);