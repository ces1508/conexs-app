angular.module('conexs')
.controller('PolizasCtrl',['$scope','$state','$http','pushNotifications',function($scope,$state,$http,pushNotifications){
console.log(window.localStorage['user']);
	$scope.init = function(){
		$scope.list = {};
		var req = {
			url: 'http://192.168.0.8:80/conexs/list-polizas.php',
			method: 'POST',
			data: {
				user: window.localStorage['user']
			}
		};
		$http(req).then(function(response){
			console.log(response.data);
			$scope.list = response.data;
		},function(error){

		});
		if(window.localStorage['regid']){
			pushNotifications.sendDeviceInfo(window.localStorage['user']);

		}
	};

	$scope.init();

}]);
