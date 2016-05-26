angular.module('conexs')
.controller('NotificationCtrl',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	alert('vista de una notificaion xD');
	alert($stateParams.notification_id);

	var req= {
		method: 'GET',
		url: 'http://192.168.0.4:80/conexs/saveDeviceInfo.php',
	};
	$http(req).then(function(response){
		console.log(response.data.ok);
	},function(error){

	});
}]);