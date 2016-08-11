angular.module('conexs')
.controller('NotificationCtrl',['$scope','$http','$stateParams',function($scope,$http,$stateParams){

	$scope.notification_id = $stateParams.notification_id;

	var req= {
		method: 'GET',
		url: 'http://192.168.0.8:80/conexs/getNotification.php?id='+ $scope.notification_id,
	};
	$http(req).then(function(response){
		console.log(response.data);
		$scope.notification = response.data[0];
		console.log(response.error);
	},function(error){
		console.log(error);
	});
	var notificacion = $('#noti');
	notificacion.remove();


	$scope.goLink =function(q){
		cordova.InAppBrowser.open(q , '_blank', 'location=yes');
	}
}]);
