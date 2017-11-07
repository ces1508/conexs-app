angular.module('conexs')
.controller('PolizasCtrl',['$scope','$state','$http','pushNotifications',function($scope,$state,$http,pushNotifications){
	$scope.init = function(){
		$scope.list = {};
		var req = {
			url: 'http://api.conexseguros.com/list-polizas.php',
			method: 'POST',
			data: {
				user: window.localStorage['user']
			}
		};
		$http(req).then(function(response){
			$scope.list = response.data;
		},function(error){

		});
		if(window.localStorage['regid']){
			pushNotifications.sendDeviceInfo(window.localStorage['user']);
		}
	};

	$scope.init();

}]);
